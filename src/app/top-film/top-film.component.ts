import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-top-film',
  templateUrl: './top-film.component.html',
  styleUrls: ['./top-film.component.css']
})
export class TopFilmComponent implements OnInit {

  films:Film[]=[];
  resultatFilms :Film[]=[];

  lenghtTotal:any;
  page: number = 1;
  constructor(private filmService:FilmService) { }

  ngOnInit(): void {

    this.getFilms();
  }
  getFilms(){
    this.filmService.findAll()
    .subscribe(films => {
      this.resultatFilms = this.films = films.sort((a,b)=>a.nb_premiere_partie - b.nb_diffusion)

      this.lenghtTotal = films.length

      console.log(this.resultatFilms)
    })
         
  }

}
