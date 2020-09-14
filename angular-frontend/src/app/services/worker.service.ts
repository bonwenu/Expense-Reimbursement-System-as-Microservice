import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models/Worker'

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://18.224.228.120:8081/api/workers";
  //private baseUrl = "http://localhost:8081/api/workers";


  getAllEmployees(): Observable<Worker[]> {

    return this.http.get<Worker[]>(this.baseUrl);
  }

  getEmployeeById(id:number): Observable<Worker> {

    return this.http.get<Worker>(this.baseUrl+"/"+id);
  }

  getEmployeeNameById(id:number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(this.baseUrl+"/name/"+id, {headers, responseType: 'text'});
  }
  
  updateEmployee(worker: Worker) {
    return this.http.put(this.baseUrl, worker);
  }
}
