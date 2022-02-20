import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {Municipios, MunicipiosRelations} from '../models';

export class MunicipiosRepository extends DefaultCrudRepository<
  Municipios,
  typeof Municipios.prototype.codigo_ibge,
  MunicipiosRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(Municipios, dataSource);
  }
}
