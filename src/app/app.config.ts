import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '../store/app.state';
import { NgxsReduxDevtoolsPlugin, NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

export const appConfig: ApplicationConfig = {

  providers: [importProvidersFrom(NgxsModule.forRoot([AppState], {
    developmentMode: true,
  }), NgxsReduxDevtoolsPluginModule.forRoot()), provideRouter(routes)]
};
