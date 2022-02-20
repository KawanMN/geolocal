import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cities} from '../models';
import {CitiesRepository} from '../repositories';

export class CitiesController {
  constructor(
    @repository(CitiesRepository)
    public citiesRepository : CitiesRepository,
  ) {}

  @post('/cities')
  @response(200, {
    description: 'Cities model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cities)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cities, {
            title: 'NewCities',
            exclude: ['id'],
          }),
        },
      },
    })
    cities: Omit<Cities, 'id'>,
  ): Promise<Cities> {
    return this.citiesRepository.create(cities);
  }

  @get('/cities/count')
  @response(200, {
    description: 'Cities model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cities) where?: Where<Cities>,
  ): Promise<Count> {
    return this.citiesRepository.count(where);
  }

  @get('/cities')
  @response(200, {
    description: 'Array of Cities model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cities, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cities) filter?: Filter<Cities>,
  ): Promise<Cities[]> {
    return this.citiesRepository.find(filter);
  }

  @patch('/cities')
  @response(200, {
    description: 'Cities PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cities, {partial: true}),
        },
      },
    })
    cities: Cities,
    @param.where(Cities) where?: Where<Cities>,
  ): Promise<Count> {
    return this.citiesRepository.updateAll(cities, where);
  }

  @get('/cities/{id}')
  @response(200, {
    description: 'Cities model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cities, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cities, {exclude: 'where'}) filter?: FilterExcludingWhere<Cities>
  ): Promise<Cities> {
    return this.citiesRepository.findById(id, filter);
  }

  @patch('/cities/{id}')
  @response(204, {
    description: 'Cities PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cities, {partial: true}),
        },
      },
    })
    cities: Cities,
  ): Promise<void> {
    await this.citiesRepository.updateById(id, cities);
  }

  @put('/cities/{id}')
  @response(204, {
    description: 'Cities PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cities: Cities,
  ): Promise<void> {
    await this.citiesRepository.replaceById(id, cities);
  }

  @del('/cities/{id}')
  @response(204, {
    description: 'Cities DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.citiesRepository.deleteById(id);
  }
}
