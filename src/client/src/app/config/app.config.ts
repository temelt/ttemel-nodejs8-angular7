
import { AppConfig } from './app-config';
export { AppConfig } from './app-config';
import { environment } from '../../environments/environment'
// #docregion token
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
// #enddocregion token
// #docregion config
export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.API_URL,
  userStatusConstant: {
    DELETED: -1,
    INACTIVE: 0,
    ACTIVE: 1
  },
  userStatusOptions: [
    { id: -1, name: 'Deleted' },
    { id: 0, name: 'In Active' },
    { id: 1, name: 'Active' }
  ]

};
