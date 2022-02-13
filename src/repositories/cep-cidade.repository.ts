import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {CepCidade, CepCidadeRelations} from '../models';

export class CepCidadeRepository extends DefaultCrudRepository<
  CepCidade,
  typeof CepCidade.prototype.id,
  CepCidadeRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(CepCidade, dataSource);
  }
}
