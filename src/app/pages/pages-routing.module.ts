import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Index6Component } from './index6/index6.component';
import { Projet2Component } from './index6/projet2/projet2.component';
import { Projet3Component } from './index6/projet3/projet3.component';
import { Projet1Component } from './projet1/projet1.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service21Component } from './service21/service21.component';
import { Service22Component } from './service22/service22.component';
import { Service23Component } from './service23/service23.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service5Component } from './service5/service5.component';
import { Service6Component } from './service6/service6.component';
import { Service7Component } from './service7/service7.component';

const routes: Routes = [
    {
        path: '',
        component: Index6Component
    },
    {
        path: 'projet1',
        component: Projet1Component
    },
    {
        path: 'projet2',
        component: Projet2Component
    },
    {
        path: 'projet3',
        component: Projet3Component
    },
    {
        path: 'service1',
        component:Service1Component
    },
    {
        path: 'service2',
        component:Service2Component
    },
    {
        path: 'service3',
        component:Service3Component
    },
    {
        path: 'service4',
        component:Service4Component
    },
    {
        path: 'service5',
        component:Service5Component
    },
    {
        path: 'service6',
        component:Service6Component
    },
    {
        path: 'service7',
        component:Service7Component
    },
    {
        path: 'service2/Design',
        component:Service21Component
    },
    {
        path: 'service2/Digital',
        component:Service22Component
    },
    {
        path: 'service2/SoftwareE',
        component:Service23Component
    },



    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
