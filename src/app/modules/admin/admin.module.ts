import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListOfAssignmentsComponent } from './components/list-of-assignments/list-of-assignments.component';
import { ReceivedAssignmentsListComponent } from './components/received-assignments-list/received-assignments-list.component';
import { NewAssignmentComponent } from './components/new-assignment/new-assignment.component';
import { UpcomingBirthdaysComponent } from './components/upcoming-birthdays/upcoming-birthdays.component';
import { NewsCircularsComponent } from './components/news-circulars/news-circulars.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    ListOfAssignmentsComponent,
    ReceivedAssignmentsListComponent,
    NewAssignmentComponent,
    UpcomingBirthdaysComponent,
    NewsCircularsComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
