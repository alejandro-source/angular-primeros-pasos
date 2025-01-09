import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( public dbzService:DbzService){
    
  }
}


//onNewCharacter(): Añade un nuevo personaje a la lista characters
//OnDeleteCharacter(): Elimina un personaje de la lista según el índice proporcionado