import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';

import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  films:Film[]=[];
  resultatFilms :Film[]=[];

  lenghtTotal:any;
  page: number = 1;
  order: any;
  

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {

    this.getFilms();
  }
  getFilms(){
    this.filmService.findAll()
    .subscribe(films => {
      this.resultatFilms = this.films = films.sort((a,b)=>b.nb_diffusion - a.nb_diffusion)

      this.lenghtTotal = films.length

      console.log(this.resultatFilms)
    })
         
  }
 
}
