import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CategoriesComponent } from "./pages/categories/categories.component"
import { MoviesInCategoryComponent } from "./pages/categories/movies-in-category/movies-in-category.component"
import { MovieDetailsComponent } from "./pages/movies/movie-details/movie-details.component"
import { MoviesComponent } from "./pages/movies/movies.component"
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component"
import { MoviesInYearComponent } from "./pages/years/movies-in-year/movies-in-year.component"
import { YearsComponent } from "./pages/years/years.component"

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:category', component: MoviesInCategoryComponent },
  { path: 'years', component: YearsComponent },
  { path: 'year/:year', component: MoviesInYearComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}