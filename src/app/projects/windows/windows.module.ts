import { NgModule } from '@angular/core';
import { WindowsRoutingModule } from './windows-routing.module';
import { SharedModule } from 'src/app/shared/shared.moule';

import { WindowsComponent } from './windows.component';
import { WFooterComponent } from './w-footer/w-footer.component';
import { WStartComponent } from './w-header/w-start/w-start.component';
import { WExplorerComponent } from './w-header/w-explorer/w-explorer.component';
import { WDesktopComponent } from './w-header/w-desktop/w-desktop.component';
import { WBrowserComponent } from './w-header/w-browser/w-browser.component';
import { WSettingComponent } from './w-header/w-setting/w-setting.component';

@NgModule({
  declarations: [
    WFooterComponent,
    WindowsComponent,
    WStartComponent,
    WExplorerComponent,
    WDesktopComponent,
    WBrowserComponent,
    WSettingComponent,
  ],
  imports: [WindowsRoutingModule, SharedModule],
  providers: [],
})
export class WindowsModule {}
