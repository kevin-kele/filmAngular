import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../services/film.service';


@Component({
  selector: 'app-top-realisateur',
  templateUrl: './top-realisateur.component.html',
  styleUrls: ['./top-realisateur.component.css']
})
export class TopRealisateurComponent implements OnInit {
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
      this.resultatFilms = this.films = films.sort((a,b)=> (a.nb_premiere_partie + b.nb_diffusion) )

      this.lenghtTotal = films.length

      console.log(this.resultatFilms)
    })
         
  }
}
