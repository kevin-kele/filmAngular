import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
apiUrl= "http://localhost:3000/films";
  constructor(private htpp:HttpClient) { }

  findAll(){
   return this.htpp.get<Film[]>(this.apiUrl);
  }

}
