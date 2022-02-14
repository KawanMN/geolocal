import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: 'postgresql-68950-0.cloudclusters.net',
  port: 19353,
  user: 'root',
  password: 'ma123456',
  database: 'geolocal'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CepCidadeDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'cepCidade';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.cepCidade', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
