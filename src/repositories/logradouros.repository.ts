import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {Logradouros, LogradourosRelations} from '../models';

export class LogradourosRepository extends DefaultCrudRepository<
  Logradouros,
  typeof Logradouros.prototype.cd_logradouro,
  LogradourosRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(Logradouros, dataSource);
  }
}
