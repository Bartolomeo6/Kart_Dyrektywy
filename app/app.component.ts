import { Component, Input } from '@angular/core';
import { SynComponent } from './syn/syn.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt';
  pokaz: boolean = false;
  imie: string = "bartosz";
  imieZduzej: string = this.imie.toUpperCase();

  ukryj(): any{
    if(this.pokaz == false){
      this.pokaz = true;
    }
    else{
      this.pokaz = false;
    }
  }

  opcja: number = 1;

  krawedzie: string = "border: 2px solid black; border-collapse: collapse;";

  kursy: string[] = ["Kurs gotowania","kurs szydełkowania","kurs programowania"];
}
