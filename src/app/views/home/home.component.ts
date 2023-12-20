import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CardTechnologiesComponent } from '../../components/card-technologies/card-technologies.component';

import { Technology } from '../../models/technologies.model';
import { Developer } from '../../models/developers.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent,CardTechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  /*public TECHNOLOGIES_URL: string = 'https://pokeapi.co/api/v2/pokemon/';*/
  public DEVELOPERS_URL: string = 'https://portfolio-api-production-830b.up.railway.app/api/developers/1';
  public TECHNOLOGIES_URL: string = 'https://portfolio-api-production-830b.up.railway.app/api/technologies/1';
  public developer: null | Developer = null;
  public technology: null | Technology = null;

  constructor(private http:HttpClient){}

  ngOnInit(): void{
    this.searchDataDeveloper();
  };

  public searchDataDeveloper(): void{
    this.http.get<void>(this.DEVELOPERS_URL).subscribe(
      (data: any) => {
        console.log(data);
        this.developer = {
          DeveloperId: data.DeveloperId,
          DeveloperName: data.DeveloperName,
          DeveloperLastName: data.DeveloperLastName,
          DeveloperBorn: data.DeveloperBorn,
          DeveloperNationality: data.DeveloperNationality,
          DeveloperDescriptionShort: data.DeveloperDescriptionShort,
          DeveloperDescriptionLarge: data.DeveloperDescriptionLarge
        }
        console.log(this.developer);
      },
      (error: any) => {
        console.log(error);
        this.developer = null;
      }
    )
  }
}
