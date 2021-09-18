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
  

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {

    this.getFilms();
    // this.getDimensionsByFind(5);
    this.sortChange()
  }
  getFilms(){
    this.filmService.findAll()
    .subscribe(films => {
      this.resultatFilms = this.films = films.sort((a,b)=>a.nb_diffusion + b.nb_diffusion)

      this.lenghtTotal = films.length

      console.log(this.resultatFilms)
    })
         
  }
  sortChange(){
    this.resultatFilms = this.films.filter((e:any)=>e.nb_diffusion.splice(5))
    console.log(this.resultatFilms)
  }
}
