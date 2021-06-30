import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SinglePage } from '../common/pagination-model';
import { Resource } from "./resource-model";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
readonly endpoint="https://reqres.in/api/unknown/";
  constructor(private http:HttpClient) { }
  GetResource(id:number){
    return this.http.get<SinglePage<Resource>>(this.endpoint+id);
  }
}
