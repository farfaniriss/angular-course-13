import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  billboard: any;
  populars: any;
  popularByKids: any;

  constructor(private movieService: MovieService){
    this.movieService.getPopulars()
          .subscribe(data => {
            this.populars = data;
          });

    this.movieService.getPopularsKids()
          .subscribe(data => {
            this.popularByKids = data;
          });

    this.movieService.getBillboard()  
          .subscribe((data:any) => {
            this.billboard = data;
          });
        
  }

  ngOnInit() {
  }

}
