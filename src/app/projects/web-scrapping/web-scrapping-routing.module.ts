import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebScrappingComponent } from './web-scrapping.component';



const routes: Routes = [
  {path: '', component: WebScrappingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebScrappingRoutingModule { }
