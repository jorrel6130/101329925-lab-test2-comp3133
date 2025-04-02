import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'missionlist',
        pathMatch: 'full'
    },
    {
        path: 'missionlist',
        component: MissionlistComponent
    },
    {
        path: 'missiondetails/:flight_number',
        component: MissiondetailsComponent
    },
];
