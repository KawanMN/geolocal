import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {Cities, CitiesRelations} from '../models';

export class CitiesRepository extends DefaultCrudRepository<
  Cities,
  typeof Cities.prototype.id,
  CitiesRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(Cities, dataSource);
  }
}
