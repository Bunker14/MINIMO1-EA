import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ID, Logs } from 'src/app/interfaces/logs';
import { UsersService } from 'src/app/services/users.service';
import { LogsService } from 'src/app/services/logs.service';
 

@Component({
  selector: 'app-list-logs',
  templateUrl: './list-logs.component.html',
  styleUrls: ['./list-logs.component.css']
})
export class ListLogsComponent {
  listLogs: Logs[] = [];
  loading: boolean = false;
  idLog: string;

  constructor(private _logsService: LogsService,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.idLog = aRouter.snapshot.paramMap.get("idLog")!;
  }

  ngOnInit(): void {
    if (this.idLog != null) {
      this.getListLogs
      //this.getUsersTicket(this.idUser);
    }else{
      this.getListLogs()
    }
    
  }

  getListLogs() {
    this.loading = true;
    this._logsService.getListLogs().subscribe((data: Logs[]) => {
      this.listLogs = data;
      this.loading = false;
    })
  }

  deleteUser(id: ID) {
    this.loading = true;
    this._logsService.deleteLog(id).subscribe(() => {
      //this.loading=false;
      //if (this.idUser != null) {
        //this.getProductosTicket(this.idUser);
      //}else{
        //this.getListUsers()
      //}
      this.toastr.warning('El log fue eliminado con exito', 'log eliminado');
    });
  }

  //getUsersTicket(id:string) {
    //this.loading = true;
    //this._usersService.getUsersTicket(id).subscribe((data: User[]) => {
      //this.listUsers = data;
      //this.loading = false;
    //})
  //}

}
