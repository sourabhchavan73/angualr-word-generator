import { Component } from '@angular/core';
import ArrayWords from '../utils/words'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  word = '';
  limit = 10;

  handleSlider = (maxlimit:number) => {
    this.limit = maxlimit
  }

  generateNewWordString = () => {
    this.word = ArrayWords.slice(0, this.limit).join(' ');
    console.log(this.word)
  }

}
