import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
      if (!value) return null;
      
      let words = value.split(' ');
      for (let i = 0; i < words.length; i++){
          if (i > 0 && this.isPreposition(words[i])) {
             words[i] = words[i].toLowerCase();
          } else {
             words[i] = this.toTitleCase(words[i]);
          }
      }
      return words.join(' ');
  }

  private toTitleCase(word: string): string {
      let balls =  word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
      return balls;
  }

  private isPreposition(word: string): boolean {
      let prepositions = [
        'of',
        'the',
        'in'
      ]

      return prepositions.includes(word);
  }

}
