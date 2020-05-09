import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurtherComponent } from './further/further.component';
import { WebScrappingComponent } from './web-scrapping.component';
import { UdemyCouponsComponent } from './udemy-coupons/udemy-coupons.component';
import { GiveawaysComponent } from './giveaways/giveaways.component';



const routes: Routes = [
  {path: '', component: WebScrappingComponent, children: [
    {path: '', component: FurtherComponent},
    {path: 'udemy-coupons', component: UdemyCouponsComponent},
    {path: 'giveaways', component: GiveawaysComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebScrappingRoutingModule { }
