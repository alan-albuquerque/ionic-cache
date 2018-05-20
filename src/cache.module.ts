import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CacheService } from './cache.service';
import { IonicStorageModule } from '@ionic/storage';
import { Config, factoryConfig } from './config';

export interface CacheModuleConfig {
  keyPrefix?: string;
}

export const CacheModuleConfigToken = new InjectionToken<CacheModuleConfig>('CacheModuleConfigToken');

@NgModule({
  imports: [
    IonicStorageModule.forRoot({
      name: '__ionicCache',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ]
})
export class CacheModule {
  static forRoot(config: CacheModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: CacheModule,
      providers: [
        CacheService,
        {provide: CacheModuleConfigToken, useValue: config},
        {provide: Config, useFactory: factoryConfig, deps: [CacheModuleConfigToken]},
      ]
    };
  }
}

