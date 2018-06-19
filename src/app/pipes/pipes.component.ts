import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
    titleInput; 
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    superlongtext = ' Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers Rubber baby buggy bumpers   '

}
