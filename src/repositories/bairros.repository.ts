import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {Bairros, BairrosRelations} from '../models';

export class BairrosRepository extends DefaultCrudRepository<
  Bairros,
  typeof Bairros.prototype.cd_bairro,
  BairrosRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(Bairros, dataSource);
  }
}
