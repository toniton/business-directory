import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
// import { DynamicFormModule } from 'angular-dynamic-form';

@NgModule({
  imports: [
    CommonModule,
    // DynamicFormModule,
    ApplicationRoutingModule
  ],
  declarations: [ApplicationComponent]
})
export class ApplicationModule { }
