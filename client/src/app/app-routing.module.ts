import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebTopComponent } from './web-top/web-top.component';

      
const routes: Routes = [
  { path: '**', component: WebTopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
