import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-card-technologies',
  standalone: true,
  imports: [],
  templateUrl: './card-technologies.component.html',
  styleUrl: './card-technologies.component.scss'
})
export class CardTechnologiesComponent {

  @Input() img = '';
  @Input() tecnologia = '';

}
