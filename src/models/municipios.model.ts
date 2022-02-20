import {Entity, model, property} from '@loopback/repository';

@model()
export class Municipios extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  codigo_ibge: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  latitude: number;

  @property({
    type: 'number',
    required: true,
  })
  longitude: number;

  @property({
    type: 'boolean',
    required: true,
  })
  capital: boolean;

  @property({
    type: 'number',
    required: true,
  })
  codigo_uf: number;

  @property({
    type: 'string',
    required: true,
  })
  siafi_id: string;

  @property({
    type: 'number',
    required: true,
  })
  ddd: number;

  @property({
    type: 'string',
    required: true,
  })
  fuso_horario: string;


  constructor(data?: Partial<Municipios>) {
    super(data);
  }
}

export interface MunicipiosRelations {
  // describe navigational properties here
}

export type MunicipiosWithRelations = Municipios & MunicipiosRelations;
