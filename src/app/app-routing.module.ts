import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplateBrowseComponent } from './pages/templates/template-browse/template-browse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'templates', component: TemplateBrowseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
