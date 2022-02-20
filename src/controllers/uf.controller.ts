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
import {Uf} from '../models';
import {UfRepository} from '../repositories';

export class UfController {
  constructor(
    @repository(UfRepository)
    public ufRepository : UfRepository,
  ) {}

  @post('/ufs')
  @response(200, {
    description: 'Uf model instance',
    content: {'application/json': {schema: getModelSchemaRef(Uf)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uf, {
            title: 'NewUf',
            exclude: ['cd_uf'],
          }),
        },
      },
    })
    uf: Omit<Uf, 'cd_uf'>,
  ): Promise<Uf> {
    return this.ufRepository.create(uf);
  }

  @get('/ufs/count')
  @response(200, {
    description: 'Uf model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Uf) where?: Where<Uf>,
  ): Promise<Count> {
    return this.ufRepository.count(where);
  }

  @get('/ufs')
  @response(200, {
    description: 'Array of Uf model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Uf, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Uf) filter?: Filter<Uf>,
  ): Promise<Uf[]> {
    return this.ufRepository.find(filter);
  }

  @patch('/ufs')
  @response(200, {
    description: 'Uf PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uf, {partial: true}),
        },
      },
    })
    uf: Uf,
    @param.where(Uf) where?: Where<Uf>,
  ): Promise<Count> {
    return this.ufRepository.updateAll(uf, where);
  }

  @get('/ufs/{id}')
  @response(200, {
    description: 'Uf model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Uf, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Uf, {exclude: 'where'}) filter?: FilterExcludingWhere<Uf>
  ): Promise<Uf> {
    return this.ufRepository.findById(id, filter);
  }

  @patch('/ufs/{id}')
  @response(204, {
    description: 'Uf PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uf, {partial: true}),
        },
      },
    })
    uf: Uf,
  ): Promise<void> {
    await this.ufRepository.updateById(id, uf);
  }

  @put('/ufs/{id}')
  @response(204, {
    description: 'Uf PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() uf: Uf,
  ): Promise<void> {
    await this.ufRepository.replaceById(id, uf);
  }

  @del('/ufs/{id}')
  @response(204, {
    description: 'Uf DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ufRepository.deleteById(id);
  }
}
