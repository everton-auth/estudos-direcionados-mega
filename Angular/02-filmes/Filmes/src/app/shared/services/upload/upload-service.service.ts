import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(
    private http: HttpClient
  ) { }
  upload(files: Set<File>, url:string){
    const formData = new FormData();
    files.forEach(file => formData.append('file',file,file.name))
    return this.http.post(url,formData,{
      observe: 'events',
      reportProgress:true
    })
  }

}
