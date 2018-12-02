import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:any;
  backTo = "";
  searched = "";

  constructor(public movieService: MovieService,
              private route: ActivatedRoute) { 
      this.route.params.subscribe(params => {
        console.log(params);
        this.backTo = params['pag'];

        if(params['searched']){
          this.searched = params['searched'];
        }

        if (params['id']){
          this.movieService.getMovie(params['id'])
            .subscribe( movie => {
              console.log(movie);
              this.movie = movie;
            });
        }
      });
    }

  ngOnInit() {
  }

  getMovie(){
    
    
      
  }

}
