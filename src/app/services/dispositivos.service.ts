import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Device } from '../model/device.model';
import { Page } from '../model/page.model';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  URL = environment.API_BASE_URL + '/admin-service/admin/iot';

  constructor(private http: HttpClient) { }

  getPageable(
    page: number, 
    size: number,
    sortBy?: string,
    sortDirection?: string
  ): Observable<Page<Device>> {
    let params = new HttpParams();
    params = params.append('page', `${page}`);
    params = params.append('size', `${size}`);
    if (sortBy) params = params.append('sortBy', sortBy);
    if (sortDirection) params = params.append('sortDirection', sortDirection);
    return this.http.get(this.URL, { params: params }).pipe(
      map((resp: any) => ({
        content: resp.content,
        totalPages: resp.totalPages,
        totalElements: resp.totalElements,
        size: resp.size,
        number: resp.number,
        numberOfElements: resp.numberOfElements
      }))
    );
  }

  getById(id: string): Observable<Device> {
    return this.http.get(`${this.URL}/${id}`);
  }

  create(device: Device): Observable<Device> {
    return this.http.post(this.URL, device);
  }

  update(device: Device): Observable<Device> {
    return this.http.put(this.URL, device);
  }

  deleteById(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
