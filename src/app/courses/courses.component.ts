import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
    template: `
        <h2>{{ title }}</h2>
        <input (keyup.enter)="onKeyUp($event)" />
        <input #email (keyup.enter)="onKeyUp2(email.value)" />
        <input [(ngModel)]="twoWayData" (keyup.enter)="balls()" />
       <img [src]="imageUrl" >
       <button class="btn" [class.active]="isActive">Save</button>
       <button class="btn btn-2" [style.backgroundColor]="isActive ? 'orangered' : 'green'">balls</button>
       <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Event Binding</button>
       </div>
    `,
    styles: [`
    .btn {
        background-color: lightblue;
        display: block;
        padding: 5px;
        font-size: 20px;
        border-radius: 4px;
    }
    .btn-2 {
        color: white;
    }
    .active {
        background-color: lightgreen;
    }
    `]

})

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    isActive = true;
    twoWayData = "me@example.com";

    onSave($event){
        $event.stopPropagation();
        console.log('button was clicked...');
        console.log($event);
    }

    onDivClicked(){
        console.log('bubble bubble');
    }

    onKeyUp($event){
        console.log($event.target.value);
    }
    onKeyUp2(email) {
        console.log(email);
    }

    balls() {
        console.log(this.twoWayData);
    }
}
