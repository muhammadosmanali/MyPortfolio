import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WindowsComponent } from './windows.component';
import { WDesktopComponent } from './w-header/w-desktop/w-desktop.component';
import { WStartComponent } from './w-header/w-start/w-start.component';
import { WExplorerComponent } from './w-header/w-explorer/w-explorer.component';
import { WSettingComponent } from './w-header/w-setting/w-setting.component';
import { WBrowserComponent } from './w-header/w-browser/w-browser.component';

const routes: Routes = [
  {path: '', component: WindowsComponent, children: [
    {path: '', component: WDesktopComponent},
    {path: 'start', component: WStartComponent},
    {path: 'explorer', component: WExplorerComponent},
    {path: 'setting', component: WSettingComponent},
    {path: 'browser', component: WBrowserComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowsRoutingModule {}
