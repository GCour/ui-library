import { NgModule } from '@angular/core';
import { UiServicesLibComponent } from './ui-services-lib.component';
import {TestService} from './test.service';



@NgModule({
  declarations: [UiServicesLibComponent],
  imports: [
  ],
  providers: [TestService],
  exports: [UiServicesLibComponent]
})
export class UiServicesLibModule { }
