import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  constructor(public movieService: MovieService,
              private route: ActivatedRoute) { 
                this.route.params.subscribe(params => {
                  console.log(params);
                  if (params['text']){
                    this.search = params['text'];
                    this.searchMovie();
                  }
                });
  }

  ngOnInit() {
  }

  searchMovie() {
    if (this.search.length == 0) return;

    this.movieService.searchMovie(this.search)
      .subscribe(data => {
        console.log(data);
      })

  }

}
