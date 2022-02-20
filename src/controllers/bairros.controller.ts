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
import {Bairros} from '../models';
import {BairrosRepository} from '../repositories';

export class BairrosController {
  constructor(
    @repository(BairrosRepository)
    public bairrosRepository : BairrosRepository,
  ) {}

  @post('/bairros')
  @response(200, {
    description: 'Bairros model instance',
    content: {'application/json': {schema: getModelSchemaRef(Bairros)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bairros, {
            title: 'NewBairros',
            exclude: ['cd_bairro'],
          }),
        },
      },
    })
    bairros: Omit<Bairros, 'cd_bairro'>,
  ): Promise<Bairros> {
    return this.bairrosRepository.create(bairros);
  }

  @get('/bairros/count')
  @response(200, {
    description: 'Bairros model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Bairros) where?: Where<Bairros>,
  ): Promise<Count> {
    return this.bairrosRepository.count(where);
  }

  @get('/bairros')
  @response(200, {
    description: 'Array of Bairros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Bairros, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Bairros) filter?: Filter<Bairros>,
  ): Promise<Bairros[]> {
    return this.bairrosRepository.find(filter);
  }

  @patch('/bairros')
  @response(200, {
    description: 'Bairros PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bairros, {partial: true}),
        },
      },
    })
    bairros: Bairros,
    @param.where(Bairros) where?: Where<Bairros>,
  ): Promise<Count> {
    return this.bairrosRepository.updateAll(bairros, where);
  }

  @get('/bairros/{id}')
  @response(200, {
    description: 'Bairros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Bairros, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Bairros, {exclude: 'where'}) filter?: FilterExcludingWhere<Bairros>
  ): Promise<Bairros> {
    return this.bairrosRepository.findById(id, filter);
  }

  @patch('/bairros/{id}')
  @response(204, {
    description: 'Bairros PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bairros, {partial: true}),
        },
      },
    })
    bairros: Bairros,
  ): Promise<void> {
    await this.bairrosRepository.updateById(id, bairros);
  }

  @put('/bairros/{id}')
  @response(204, {
    description: 'Bairros PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bairros: Bairros,
  ): Promise<void> {
    await this.bairrosRepository.replaceById(id, bairros);
  }

  @del('/bairros/{id}')
  @response(204, {
    description: 'Bairros DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bairrosRepository.deleteById(id);
  }
}
