import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'survey-list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'survey-list',
    loadChildren: () => import('./survey-list/survey-list.module').then( m => m.SurveyListPageModule)
  },
  {
    path: 'survey-detail',
    loadChildren: () => import('./survey-detail/survey-detail.module').then( m => m.SurveyDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
