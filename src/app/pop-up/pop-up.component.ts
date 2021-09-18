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

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {

    this.getFilms();
  }
  getFilms(){
    this.filmService.findAll()
        .subscribe(films => {
          this.resultatFilms = this.films = films
        })
  }
}
