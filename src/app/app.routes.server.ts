import { RenderMode, ServerRoute } from '@angular/ssr';
import { SpacexapiService } from './network/spacexapi.service';
import { inject } from '@angular/core';
import { Mission } from './models/mission';
import { map } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'missiondetails/:flight_number',
    renderMode: RenderMode.Client
  }
];
