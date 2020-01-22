import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/admin/userinfo/profile/profile.component';
import { DocumentsComponent } from './components/admin/userinfo/profile/documents/documents.component';
import { UserProfileResolver } from 'src/app/resolvers/userprofile.resolver';

const routes: Routes = [  
  {
    path: '',
    component: PanelComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'userinfo/profile', component: ProfileComponent, resolve: {user: UserProfileResolver}},
      {path: 'userinfo/documents', component: DocumentsComponent},
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
