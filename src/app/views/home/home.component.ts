import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CardTechnologiesComponent } from '../../components/card-technologies/card-technologies.component';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent,CardTechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public TECHNOLOGIES_URL: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient){}

  ngOnInit(): void{
    this.searchData();
  };

  public searchData(): void{
    this.http.get<void>(this.TECHNOLOGIES_URL).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
