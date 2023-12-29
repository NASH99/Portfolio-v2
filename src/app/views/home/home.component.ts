import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CardTechnologiesComponent } from '../../components/card-technologies/card-technologies.component';
import { ScrollComponent } from '../../components/scroll/scroll.component';

import { Technology } from '../../models/technologies.model';
import { Developer } from '../../models/developers.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent,CardTechnologiesComponent, ScrollComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  /*public TECHNOLOGIES_URL: string = 'https://pokeapi.co/api/v2/pokemon/';*/
  public DEVELOPERS_URL: string = 'https://portfolio-api-production-830b.up.railway.app/api/developers/1';
  public TECHNOLOGIES_URL: string = 'https://portfolio-api-production-830b.up.railway.app/api/technologies/1';
  public developer: null | Developer = null;

  public technologies: [] | any;

  public arregloDeObjetos = [
    { TechnologyId: 1, TechnologyName: 'Angular', TechnologyImg: '../../../assets/img/tecnologies/angular.png' },
    { TechnologyId: 2, TechnologyName: 'React', TechnologyImg: '../../../assets/img/tecnologies/react.png' },
    { TechnologyId: 3, TechnologyName: 'MySql', TechnologyImg: '../../../assets/img/tecnologies/mysql.png' },
    { TechnologyId: 4, TechnologyName: 'Node JS', TechnologyImg: '../../../assets/img/tecnologies/node.png' },
    { TechnologyId: 5, TechnologyName: 'Express', TechnologyImg: '../../../assets/img/tecnologies/express.png' },
    { TechnologyId: 6, TechnologyName: 'JavaScript', TechnologyImg: '../../../assets/img/tecnologies/javascript.png' },
    { TechnologyId: 7, TechnologyName: 'PostgreSQL', TechnologyImg: '../../../assets/img/tecnologies/postgresql.png' },
    { TechnologyId: 8, TechnologyName: 'Wordpress', TechnologyImg: '../../../assets/img/tecnologies/wordpress.png' },
    { TechnologyId: 9, TechnologyName: 'Git', TechnologyImg: '../../../assets/img/tecnologies/git.png' },
    { TechnologyId: 10, TechnologyName: 'Sass', TechnologyImg: '../../../assets/img/tecnologies/sass.png' }
  ];

  constructor(private http:HttpClient){}

  ngOnInit(): void{
    this.searchDataDeveloper();
    this.searchDataTechnologies();
  };

  public searchDataDeveloper(): void{
    this.http.get<void>(this.DEVELOPERS_URL).subscribe(
      (data: any) => {
        this.developer = {
          DeveloperId: data.DeveloperId,
          DeveloperName: data.DeveloperName,
          DeveloperLastName: data.DeveloperLastName,
          DeveloperBorn: data.DeveloperBorn,
          DeveloperNationality: data.DeveloperNationality,
          DeveloperDescriptionShort: data.DeveloperDescriptionShort,
          DeveloperDescriptionLarge: data.DeveloperDescriptionLarge
        };
      },
      (error: any) => {
        console.log(error);
        this.developer = null;
      }
    )
  }

  public searchDataTechnologies(): void{
    this.http.get<void>(this.TECHNOLOGIES_URL).subscribe(
      (data: any) => {
        this.technologies = JSON.parse(JSON.stringify(data));
      }
    );

  }

}




