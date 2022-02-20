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
import {Municipios} from '../models';
import {MunicipiosRepository} from '../repositories';

export class MunicipiosController {
  constructor(
    @repository(MunicipiosRepository)
    public municipiosRepository : MunicipiosRepository,
  ) {}

  @post('/municipios')
  @response(200, {
    description: 'Municipios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Municipios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Municipios, {
            title: 'NewMunicipios',
            exclude: ['codigo_ibge'],
          }),
        },
      },
    })
    municipios: Omit<Municipios, 'codigo_ibge'>,
  ): Promise<Municipios> {
    return this.municipiosRepository.create(municipios);
  }

  @get('/municipios/count')
  @response(200, {
    description: 'Municipios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Municipios) where?: Where<Municipios>,
  ): Promise<Count> {
    return this.municipiosRepository.count(where);
  }

  @get('/municipios')
  @response(200, {
    description: 'Array of Municipios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Municipios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Municipios) filter?: Filter<Municipios>,
  ): Promise<Municipios[]> {
    return this.municipiosRepository.find(filter);
  }

  @patch('/municipios')
  @response(200, {
    description: 'Municipios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Municipios, {partial: true}),
        },
      },
    })
    municipios: Municipios,
    @param.where(Municipios) where?: Where<Municipios>,
  ): Promise<Count> {
    return this.municipiosRepository.updateAll(municipios, where);
  }

  @get('/municipios/{id}')
  @response(200, {
    description: 'Municipios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Municipios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Municipios, {exclude: 'where'}) filter?: FilterExcludingWhere<Municipios>
  ): Promise<Municipios> {
    return this.municipiosRepository.findById(id, filter);
  }

  @patch('/municipios/{id}')
  @response(204, {
    description: 'Municipios PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Municipios, {partial: true}),
        },
      },
    })
    municipios: Municipios,
  ): Promise<void> {
    await this.municipiosRepository.updateById(id, municipios);
  }

  @put('/municipios/{id}')
  @response(204, {
    description: 'Municipios PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() municipios: Municipios,
  ): Promise<void> {
    await this.municipiosRepository.replaceById(id, municipios);
  }

  @del('/municipios/{id}')
  @response(204, {
    description: 'Municipios DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.municipiosRepository.deleteById(id);
  }
}
