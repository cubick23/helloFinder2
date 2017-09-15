import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ContentComponent } from './content/content.component';



const appRoutes: Routes = [
	{path: '', component: ContentComponent},
	{path: '**', component: ContentComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);