import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films:Film[]=[];
  resultatFilms :Film[]=[];
  searchText='';

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

    searchFilms(){
      this.resultatFilms = this.films.filter((film)=>film.nom.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()))
    //  this.resultatFilms = this.films.filter((film)=>film.realisateur.includes(this.searchText))
    }


}
