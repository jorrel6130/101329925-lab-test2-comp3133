import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'missionlist',
    renderMode: RenderMode.Client
  },
  {
    path: 'missiondetails/:flight_number',
    renderMode: RenderMode.Client
  }
];
