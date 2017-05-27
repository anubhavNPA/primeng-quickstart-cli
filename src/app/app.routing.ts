import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';
import { SomeComponent }        from './components/some/some.component';
import { ChartComponent }       from './components/chart/chart.component';

const appRoutes: Routes = [
    {path: '', component: SomeComponent },
    {path: 'chart', component: ChartComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);