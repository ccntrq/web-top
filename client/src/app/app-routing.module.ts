import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebTopWrapperComponent } from './web-top-wrapper/web-top-wrapper.component';

const routes: Routes = [{ path: '**', component: WebTopWrapperComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
