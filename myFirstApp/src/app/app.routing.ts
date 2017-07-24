import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DemoComponent } from './demo/demo.component';

const arr : Routes = [
    {path:'' , redirectTo:'demo',pathMatch:'full'},
    {path:'demo', component:DemoComponent},
    {path:'product', component:FirstComponent}
];

export const routing = RouterModule.forRoot(arr);