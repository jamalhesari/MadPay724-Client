import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/admin/userinfo/profile/profile.component';
import { DocumentsComponent } from './components/admin/userinfo/profile/documents/documents.component';
import { PersianTimeAgoPipe } from 'persian-time-ago-pipe';
import { UserProfileResolver } from 'src/app/resolvers/userprofile.resolver';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    PanelRoutingModule,
    FormsModule,
    CommonModule
    
  ],
  declarations: [
    PanelComponent, 
    SidebarComponent, 
    DashboardComponent, 
    NavbarComponent,
    ProfileComponent,
    DocumentsComponent,
    PersianTimeAgoPipe    
  ],
  providers: [
    UserService,
    UserProfileResolver
  ] 

 })
export class PanelModule { }
