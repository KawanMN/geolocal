import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {States, StatesRelations} from '../models';

export class StatesRepository extends DefaultCrudRepository<
  States,
  typeof States.prototype.id,
  StatesRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(States, dataSource);
  }
}
