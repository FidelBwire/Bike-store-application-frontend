import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared-module/pagination/page';
import { Name } from '../models/name';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class AdminStaffService {

  baseUrl: string = 'http://localhost:8989/hr/staffs';

  name?: Name;

  constructor(private http: HttpClient) { }

  getStaffs(page:number, size:number):Observable<Page<Staff>> {
    return this.http.get<Page<Staff>>(`${this.baseUrl}?page=` + page + '&size=' + size);
  }

  getStaff(staffId: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.baseUrl}/staffId`);
  }
  
  getStaffName(staffId: number): Observable<Name> {
    return this.http.get<Name>(`${this.baseUrl}/staffId/name`);
  }
}
