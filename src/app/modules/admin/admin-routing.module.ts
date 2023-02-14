import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListOfAssignmentsComponent } from './components/list-of-assignments/list-of-assignments.component';
import { NewAssignmentComponent } from './components/new-assignment/new-assignment.component';
import { NewsCircularsComponent } from './components/news-circulars/news-circulars.component';
import { ReceivedAssignmentsListComponent } from './components/received-assignments-list/received-assignments-list.component';
import { UpcomingBirthdaysComponent } from './components/upcoming-birthdays/upcoming-birthdays.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent, 
  
  children:[

{path:'list-of-assignments',component:ListOfAssignmentsComponent},
{path:'received-assignments',component:ReceivedAssignmentsListComponent},
{path:'new-assignment',component:NewAssignmentComponent},
{path:'upcoming-birthdays',component:UpcomingBirthdaysComponent},
{path:'news-circulars',component:NewsCircularsComponent},
// {path:'',redirectTo:'/admin/admin-dashboard',pathMatch:'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
