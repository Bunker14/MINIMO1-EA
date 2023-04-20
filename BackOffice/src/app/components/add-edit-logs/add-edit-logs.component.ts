import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ID, Logs } from 'src/app/interfaces/logs';
//import { ListUsersComponent } from '../list-productos/list-productos.component';

import { UsersService } from 'src/app/services/users.service';
import { LogsService } from 'src/app/services/logs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-logs',
  templateUrl: './add-edit-logs.component.html',
  styleUrls: ['./add-edit-logs.component.css']
})
export class AddEditLogsComponent {
  formLogs: FormGroup;
  loading: boolean = false;
  idLog: string;
  operacion: string = 'Añadir ';

  constructor(private fb: FormBuilder,
    private _logsService: LogsService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private _location: Location) {
    this.formLogs = this.fb.group({
      //Para poner mas de una validacion hay que ponerlas entre claudators
      name: ['', Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required] 
    })
    this.idLog = aRouter.snapshot.paramMap.get("idLog")!;

  }
  ngOnInit(): void {
    if (this.idLog != null) {
      this.operacion = 'Actualizar ';
      this.getLog(this.idLog);
    }
  }

  goBack(){
    this._location.back();
  }


  addLog() {
    const logs: Logs = {
      user: this.formLogs.value.user,
      fechaLog: this.formLogs.value.fechaLog,
      tipoLog: this.formLogs.value.tipoLog,

    }

    this.loading = true;
    if (this.idLog !== null) {
      //Es update
      this._logsService.updateUser(this.idLog, logs).subscribe(() => {
        this.toastr.info(`El log fue actualizado con exito`, 'Log actualizado');
        this.loading = false;
        //if (this.idUser !== null) {
          //this.router.navigate([`/ticket/${this.idTicket}/productos`]);
        //}
        //else{
          //this.router.navigate([`/producto`]);
       // }
       this.router.navigate([`/`]);
       
      })
    } else {
      //Es crear
      this._logsService.crateLog(logs).subscribe((data:Logs) => {
        this.toastr.success(`El log fue agregado con exito`, 'Log agregado')
        this.loading = false;
        this.idLog=String(data._id!);
        console.log(data);
        
        //Es añadir el usuaio al ticket
        //if (this.idTicket !== null) {
          //this._usersService.insertProductoToTicket(this.idTicket,this.idUser).subscribe();
        //}

        //if (this.idTicket !== null) {
          //this.router.navigate([`/ticket/${this.idTicket}/productos`]);
        //}else{
          //this.router.navigate([`/producto`]);
        //}
        //this.router.navigate([`/`]);
      })

    }
    
  }

  getLog(id: string) {
    this.loading = true;
    this._logsService.getLog(id).subscribe((data: Logs) => {
      this.loading = false;
      this.formLogs.patchValue({
        user: data.user,
        fechaLog: data.fechaLog,
        tipoLog: data.tipoLog,
      })
    })
  }

}
