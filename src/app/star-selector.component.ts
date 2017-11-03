import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'star-selector',
    templateUrl: './star-selector.component.html',
    styles: []
})
export class FormComponent implements OnInit {
    @Input() rating: string;

    constructor() {
    }

    ngOnInit() {
    }
}
