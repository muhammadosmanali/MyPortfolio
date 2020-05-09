import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.moule';

import { WebScrappingComponent } from './web-scrapping.component';
import { FurtherComponent } from './further/further.component';
import { BottomSheetDetailComponent } from './shared/bottom-sheet-detail/bottom-sheet-detail.component';
import { BottomSheetCouponComponent } from './shared/bottom-sheet-coupon/bottom-sheet-coupon.component';
import { WebScrappingService } from './web-scrapping.service';
import { BottomSheetGiveawayDetailComponent } from './shared/bottom-sheet-giveaway-detail/bottom-sheet-giveaway-detail.component';
import { MianNavComponent } from './mian-nav/mian-nav.component';
import { UdemyCouponsComponent } from './udemy-coupons/udemy-coupons.component';

import { WebScrappingRoutingModule } from './web-scrapping-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LayoutModule } from '@angular/cdk/layout';
import { GiveawaysComponent } from './giveaways/giveaways.component';

@NgModule({
  declarations: [
    WebScrappingComponent,
    FurtherComponent,
    BottomSheetDetailComponent,
    BottomSheetCouponComponent,
    BottomSheetGiveawayDetailComponent,
    MianNavComponent,
    UdemyCouponsComponent,
    GiveawaysComponent,
  ],
  imports: [
    WebScrappingRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatPaginatorModule
  ],
  providers: [WebScrappingService],
})
export class WebScrappingModule {}
