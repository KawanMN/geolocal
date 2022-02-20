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
import {States} from '../models';
import {StatesRepository} from '../repositories';

export class StatesController {
  constructor(
    @repository(StatesRepository)
    public statesRepository : StatesRepository,
  ) {}

  @post('/states')
  @response(200, {
    description: 'States model instance',
    content: {'application/json': {schema: getModelSchemaRef(States)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(States, {
            title: 'NewStates',
            exclude: ['id'],
          }),
        },
      },
    })
    states: Omit<States, 'id'>,
  ): Promise<States> {
    return this.statesRepository.create(states);
  }

  @get('/states/count')
  @response(200, {
    description: 'States model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(States) where?: Where<States>,
  ): Promise<Count> {
    return this.statesRepository.count(where);
  }

  @get('/states')
  @response(200, {
    description: 'Array of States model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(States, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(States) filter?: Filter<States>,
  ): Promise<States[]> {
    return this.statesRepository.find(filter);
  }

  @patch('/states')
  @response(200, {
    description: 'States PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(States, {partial: true}),
        },
      },
    })
    states: States,
    @param.where(States) where?: Where<States>,
  ): Promise<Count> {
    return this.statesRepository.updateAll(states, where);
  }

  @get('/states/{id}')
  @response(200, {
    description: 'States model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(States, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(States, {exclude: 'where'}) filter?: FilterExcludingWhere<States>
  ): Promise<States> {
    return this.statesRepository.findById(id, filter);
  }

  @patch('/states/{id}')
  @response(204, {
    description: 'States PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(States, {partial: true}),
        },
      },
    })
    states: States,
  ): Promise<void> {
    await this.statesRepository.updateById(id, states);
  }

  @put('/states/{id}')
  @response(204, {
    description: 'States PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() states: States,
  ): Promise<void> {
    await this.statesRepository.replaceById(id, states);
  }

  @del('/states/{id}')
  @response(204, {
    description: 'States DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.statesRepository.deleteById(id);
  }
}
