import {Entity, model, property} from '@loopback/repository';

@model()
export class Bairros extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  cd_bairro?: string;

  @property({
    type: 'string',
    required: true,
  })
  cd_cidade: string;

  @property({
    type: 'string',
    required: true,
  })
  ds_bairro_nome: string;


  constructor(data?: Partial<Bairros>) {
    super(data);
  }
}

export interface BairrosRelations {
  // describe navigational properties here
}

export type BairrosWithRelations = Bairros & BairrosRelations;
