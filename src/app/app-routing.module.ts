import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'web-scrapping', loadChildren: () => import('./projects/web-scrapping/web-scrapping.module').then(m => m.WebScrappingModule)},
  {path: 'windows', loadChildren: () => import('./projects/windows/windows.module').then(m => m.WindowsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
