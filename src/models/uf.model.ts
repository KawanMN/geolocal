import {Entity, model, property} from '@loopback/repository';

@model()
export class Uf extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cd_uf?: number;

  @property({
    type: 'string',
    required: true,
  })
  ds_uf_sigla: string;

  @property({
    type: 'string',
    required: true,
  })
  ds_uf_nome: string;


  constructor(data?: Partial<Uf>) {
    super(data);
  }
}

export interface UfRelations {
  // describe navigational properties here
}

export type UfWithRelations = Uf & UfRelations;
