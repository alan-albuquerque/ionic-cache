import { Injectable } from '@angular/core';
import { CacheModuleConfig } from './cache.module';

@Injectable()
export class Config implements CacheModuleConfig {
  keyPrefix = '';

  constructor(config: CacheModuleConfig) {
    if (config.keyPrefix) {
      this.keyPrefix = config.keyPrefix;
    }
  }

}

export function factoryConfig(userConfig: CacheModuleConfig) {
  return new Config(userConfig);
}
