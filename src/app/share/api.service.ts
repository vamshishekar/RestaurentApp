import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
// post method
postRestaurent(data:any){
  return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
    return res;
  }))
}

// get method
getRestaurent(){
  return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
    return res;
  }))
}

// put method
updateRestaurent(data:any, id:number){
  return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
    return res;
  }))
}

// delete method
deleteRestaurent(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
    return res;
  }))
}

}
