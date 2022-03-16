import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { HttpMoviesService } from 'src/app/services/http-movies.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  model: Partial<Movie> = {}
  categories: string[] = []
  years: string[] = []

  constructor(public http: HttpService, private httpMoviesService: HttpMoviesService) { }

  ngOnInit(): void {
    this.http.getCategories().subscribe(categories => this.categories = categories)
    this.http.getYears().subscribe(years => this.years = years)
  }

  send() {
    console.log(this.model)
    this.httpMoviesService.postMovie(this.model as Movie).subscribe(
      result => console.log(result),
      error => console.error(error)
    )
  }

  printModel(title: NgModel) {
    console.log(title)
  }

}
