import { NgModule } from "@angular/core";
import { WebScrappingComponent } from './web-scrapping.component';
import { BrowserModule } from '@angular/platform-browser';
import { WebScrappingRoutingModule } from './web-scrapping-routing.module';
import { SharedModule } from 'src/app/shared/shared.moule';


@NgModule({
  declarations: [
    WebScrappingComponent
  ],
  imports: [
    WebScrappingRoutingModule,
    SharedModule
  ]
})
export class WebScrappingModule {}
