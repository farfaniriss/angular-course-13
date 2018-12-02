import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { map } from "rxjs/operators";
import { toDate } from '@angular/common/src/i18n/format_date';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey:string = "9a974d9c8fc58609cfc6d1d5d70840ba"
  private urlMoviedb = "https://api.themoviedb.org/3"
  
  //to keep searched movies in memory
  movies:any[] = [];

  constructor(private jsonp: Jsonp,
              private http: Http) { }

  getMovie( id: string){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apiKey }&language=es`;

    return this.http.get (url)
      .pipe ( 
          map ( res => res.json() ));
  }  

  getPopulars(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get (url)
      .pipe ( 
          map ( res => res.json().results ));
  }  

  getPopularsKids(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get (url)
      .pipe ( 
          map ( res => res.json().results ));
  }  

  searchMovie( text: string) {
    let url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apiKey }&language=es&query=${ text }`;

    return this.http.get (url)
      .pipe ( 
          map ( res => {
            this.movies = res.json().results;
            return res.json().results;
          }));
  }

  getBillboard(){

    let desde = new Date();
    let hasta = new Date();

    hasta.setDate( hasta.getDate() + 7);

    let fromString = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDay() }`;
    let ToString = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDay() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2018-11-01&primary_release_date.lte=2018-11-08&api_key=${ this.apiKey }&language=es`; 

    return this.http.get (url)
      .pipe ( 
          map ( res => res.json().results ));
  }
}
