import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CepCidadeDataSource} from '../datasources';
import {Estados, EstadosRelations} from '../models';

export class EstadosRepository extends DefaultCrudRepository<
  Estados,
  typeof Estados.prototype.codigo_uf,
  EstadosRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: CepCidadeDataSource,
  ) {
    super(Estados, dataSource);
  }
}
