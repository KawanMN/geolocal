import {Entity, model, property} from '@loopback/repository';

@model()
export class Logradouros extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cd_logradouro?: number;

  @property({
    type: 'number',
    required: true,
  })
  cd_bairro: number;

  @property({
    type: 'number',
    required: true,
  })
  cd_tipo_logradouros: number;

  @property({
    type: 'string',
    required: true,
  })
  ds_logradouro_nome: string;

  @property({
    type: 'string',
    required: true,
  })
  no_logradouro_cep: string;


  constructor(data?: Partial<Logradouros>) {
    super(data);
  }
}

export interface LogradourosRelations {
  // describe navigational properties here
}

export type LogradourosWithRelations = Logradouros & LogradourosRelations;
