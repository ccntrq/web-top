import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebTopComponent } from './web-top/web-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TODO: extract to mat-imports module
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SecondsToTimePipe } from './seconds-to-time.pipe';
import { WebTopWrapperComponent } from './web-top-wrapper/web-top-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WebTopComponent,
    SecondsToTimePipe,
    WebTopWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
