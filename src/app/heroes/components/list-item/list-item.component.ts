import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../models/hero.model';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor() {
    }

    ngOnInit() {
    }

}
