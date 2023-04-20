import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListLogsComponent } from './components/list-logs/list-logs.component';
import { AddEditLogsComponent } from './components/add-edit-logs/add-edit-logs.component';



const routes: Routes = [


  {path:'logs',component:ListLogsComponent},
  {path:'logs/add',component:AddEditLogsComponent},
  {path:'logs/edit/:idLog',component:AddEditLogsComponent},
  {path:'**',redirectTo:'',pathMatch:'full'} //Este siempre el ultimo
  
  // {path:'user',component:ListUsersComponent},
  // {path:'user/add',component:AddEditUsersComponent},
  // {path:'user/edit/:idUser',component:AddEditUsersComponent},
  // {path:'**',redirectTo:'',pathMatch:'full'} //Este siempre el ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
