import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://localhost:3000/foglalasok/"
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get(this.url);
  }

  create(body:any){
    return this.http.post(this.url, body);
  }

  update(body:any){
    return this.http.put(this.url+body.id, body);
  }
  
  delete(body:any){
    return this.http.delete(this.url+body.id);
  }
}
