import {Entity, model, property} from '@loopback/repository';

@model()
export class Cities extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  idestado: string;


  constructor(data?: Partial<Cities>) {
    super(data);
  }
}

export interface CitiesRelations {
  // describe navigational properties here
}

export type CitiesWithRelations = Cities & CitiesRelations;
