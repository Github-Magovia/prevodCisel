import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priklad2';


  decimal: number = 0;
  public prevod(e:any): void{
    this.decimal = e.target.value;
  }

  public decToBin(){
    return (this.decimal >>> 0).toString(2);
  }

}
