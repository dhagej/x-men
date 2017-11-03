import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
    selector: 'stars',
    styles: [`
        .stars {
            display: inline-block;
            position: relative;
            z-index: 0;
            align: right;
        }

        .stars-selected {
            position: absolute;
            max-width: 100%;
            height: 100%;
            z-index: -1;
            align: right;
        }
    `],
    templateUrl: './stars.component.html'
})

export class StarComponent implements OnInit {
    @Input('radius') radius: number = 30;
    @Input('type') type: string = 'star';
    @Input('items') items: number = 5;
    @Input('sel-color') selectedColor: string = '#e6a719';
    @Input('back-color') backColor: string = 'white';
    @Input('star-back-color') starBackColor: string = 'lightgray';
    @Input('percent') percent: string = '0';
    @Input('stars-selected') starsSelected: number = 0;
    @Input('disabled') disabled: boolean = false;

    elDimensions: ClientRect;
    securedWidth: string;
    selectedWidth: string;
    itemsIterable: number[];

    constructor() {

    }

    ngOnInit() {
        // Pass attributes into app
        this.percent += '%';

        this.itemsIterable = new Array(this.items);
        this.securedWidth = this.starsSelected ? 100 / this.items * this.starsSelected + '%' : this.percent;

        // initial rating setup
        this.selectedWidth = this.securedWidth;
        //console.log("floor:" + Math.floor(this.starsSelected));
        //console.log("ceil:" + Math.ceil(this.starsSelected));
        switch (Math.ceil(this.starsSelected)) {
            case 1: {
                this.selectedColor = "#FF0000";
                break;
            }
            case 2: { this.selectedColor = "#A52A2A"; break; }
            case 3: { this.selectedColor = "#FFF000"; break; }
            case 4: { this.selectedColor = "#FFA500"; break; }
            case 5: { this.selectedColor = "#00FF00"; break; }
        }
    }

    changeRating(e: MouseEvent) {
        this.selectedWidth = !this.disabled && e.clientX - this.elDimensions.left + 'px';
        this.percent = parseInt(this.selectedWidth, 10) / this.radius * 2 * this.items + '%';
    }

    leaveRating() {
        this.selectedWidth = this.securedWidth;
    }

    secureNewRating() {
        this.securedWidth = this.percent;
    }
}
