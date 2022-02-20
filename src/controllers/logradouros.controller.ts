import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Logradouros} from '../models';
import {LogradourosRepository} from '../repositories';

export class LogradourosController {
  constructor(
    @repository(LogradourosRepository)
    public logradourosRepository: LogradourosRepository,
  ) { }

  @post('/logradouros')
  @response(200, {
    description: 'Logradouros model instance',
    content: {'application/json': {schema: getModelSchemaRef(Logradouros)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Logradouros, {
            title: 'NewLogradouros',
            exclude: ['cd_logradouro'],
          }),
        },
      },
    })
    logradouros: Omit<Logradouros, 'cd_logradouro'>,
  ): Promise<Logradouros> {
    return this.logradourosRepository.create(logradouros);
  }

  @get('/logradouros/count')
  @response(200, {
    description: 'Logradouros model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Logradouros) where?: Where<Logradouros>,
  ): Promise<Count> {
    return this.logradourosRepository.count(where);
  }

  @get('/logradouros')
  @response(200, {
    description: 'Array of Logradouros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Logradouros, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Logradouros) filter?: Filter<Logradouros>,
  ): Promise<Logradouros[]> {
    return this.logradourosRepository.find(filter);
  }

  @patch('/logradouros')
  @response(200, {
    description: 'Logradouros PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Logradouros, {partial: true}),
        },
      },
    })
    logradouros: Logradouros,
    @param.where(Logradouros) where?: Where<Logradouros>,
  ): Promise<Count> {
    return this.logradourosRepository.updateAll(logradouros, where);
  }

  @get('/logradouros/{id}')
  @response(200, {
    description: 'Logradouros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Logradouros, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Logradouros, {exclude: 'where'}) filter?: FilterExcludingWhere<Logradouros>
  ): Promise<Logradouros> {
    return this.logradourosRepository.findById(id, filter);
  }

  @patch('/logradouros/{id}')
  @response(204, {
    description: 'Logradouros PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Logradouros, {partial: true}),
        },
      },
    })
    logradouros: Logradouros,
  ): Promise<void> {
    await this.logradourosRepository.updateById(id, logradouros);
  }

  @put('/logradouros/{id}')
  @response(204, {
    description: 'Logradouros PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() logradouros: Logradouros,
  ): Promise<void> {
    await this.logradourosRepository.replaceById(id, logradouros);
  }

  @del('/logradouros/{id}')
  @response(204, {
    description: 'Logradouros DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.logradourosRepository.deleteById(id);
  }
}
