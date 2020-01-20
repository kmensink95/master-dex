import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from 'src/app/models/interfaces/Type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

public getType(): Observable<Type>{

    return this.httpClient.get<Type>(`http://pokeapi.co/api/v2/type`);
}
  constructor(private httpClient: HttpClient) { }
}