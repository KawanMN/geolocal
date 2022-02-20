import {Entity, model, property} from '@loopback/repository';

@model()
export class States extends Entity {
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
  uf: string;


  constructor(data?: Partial<States>) {
    super(data);
  }
}

export interface StatesRelations {
  // describe navigational properties here
}

export type StatesWithRelations = States & StatesRelations;
