import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {ID, Logs} from '../interfaces/logs'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogsService {
  
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;

    
  }

  getListLogs(): Observable<Logs[]> {
    const myApiUrl: string = 'logs/all'
    return this.http.get<Logs[]>(`${this.myAppUrl}${myApiUrl}`)
  }

  deleteLog(id: ID): Observable<void> {
    const myApiUrl: string = 'logs/'
    return this.http.delete<void>(`${this.myAppUrl}${myApiUrl}${id}`)

  }

  crateLog(logs: Logs): Observable<Logs> {
    const myApiUrl: string = 'logs/'
    return this.http.post<Logs>(`${this.myAppUrl}${myApiUrl}`, logs);
  }

  getLog(id: string): Observable<Logs> {
    const myApiUrl: string = 'logs/';
    return this.http.get<Logs>(`${this.myAppUrl}${myApiUrl}${id}`);
  }

  updateUser(id: string, logs: Logs): Observable<Logs> {
    const myApiUrl: string = 'logs/';
    return this.http.put<Logs>(`${this.myAppUrl}${myApiUrl}${id}`, logs);
  }


}
