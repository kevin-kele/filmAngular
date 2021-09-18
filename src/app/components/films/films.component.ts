
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

import { MatDialog } from "@angular/material/dialog";
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { TopFilmComponent } from 'src/app/top-film/top-film.component';
import { TopRealisateurComponent } from 'src/app/top-realisateur/top-realisateur.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films:Film[]=[];
  resultatFilms :Film[]=[];
  searchText='';
  FilmSelected!: number;
  CheckBoxArray:any = [
    {
      nationalite:"France",
      type:'checkbox'
    },
    {
      nationalite:"Etats-Unis",
      type:'checkbox'
    },
    {
      nationalite:"Europe",
      type:'checkbox'
    },
    {
      nationalite:"autres nationalités",
      type:'checkbox'
    },
  ];

  filmArray:any=[];

  constructor(private filmService:FilmService , public dialogRef: MatDialog ) { }

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
    }

    searchRea(){
      this.resultatFilms = this.films.filter((film)=>film.realisateur.includes(this.searchText))
    }

    openDialog(){
      this.dialogRef.open(PopUpComponent)
    }
    openDialogRatio(){
      this.dialogRef.open(TopFilmComponent)
    }

    openDialogRea(){
      this.dialogRef.open(TopRealisateurComponent)
    }

    onChange(event:any){
      // console.log(event.target.value)
      if ( event.target.checked == true) {
        this.resultatFilms = this.films.filter((e:any)=>e.nationalite == event.target.value)
      }else {
        this.resultatFilms = this.films
      }
    }
    
    
}
