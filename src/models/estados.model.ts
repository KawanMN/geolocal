import {Entity, model, property} from '@loopback/repository';

@model()
export class Estados extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  codigo_uf?: number;

  @property({
    type: 'string',
    required: true,
  })
  uf: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  latitude: string;

  @property({
    type: 'number',
    required: true,
  })
  longitude: string;

  @property({
    type: 'string',
    required: true,
  })
  regiao: string;


  constructor(data?: Partial<Estados>) {
    super(data);
  }
}

export interface EstadosRelations {
  // describe navigational properties here
}

export type EstadosWithRelations = Estados & EstadosRelations;
