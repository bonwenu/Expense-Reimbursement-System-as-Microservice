import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  //private baseUrl = "http://3.18.225.149:8082/api/requests";
  private baseUrl = "http://localhost:8082/api/requests";

  getAllRequests(): Observable<Request[]> {

    return this.http.get<Request[]>(this.baseUrl);

  }

  getAllPendingRequests(): Observable<Request[]> {

    return this.http.get<Request[]>(this.baseUrl+"/all-pending");

  }

  getAllNonPendingRequests(): Observable<Request[]> {

    return this.http.get<Request[]>(this.baseUrl+"/all-non-pending");

  }

  getNonPendingRequestsById(id:number): Observable<Request[]> {

    return this.http.get<Request[]>(this.baseUrl+"/non-pending/"+id);

  }

  getPendingRequestsById(id:number): Observable<Request[]> {

    return this.http.get<Request[]>(this.baseUrl+"/pending/"+id);

  }

  createRequest(employee: Request) {
    return this.http.post(this.baseUrl, employee);

  }

  updateRequest(r: Request) {
    return this.http.put(this.baseUrl, r);
  }

}