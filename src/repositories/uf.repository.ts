import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {Uf, UfRelations} from '../models';

export class UfRepository extends DefaultCrudRepository<
  Uf,
  typeof Uf.prototype.cd_uf,
  UfRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(Uf, dataSource);
  }
}
