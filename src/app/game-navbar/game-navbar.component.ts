import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-navbar',
    templateUrl: './game-navbar.component.html',
    styleUrls: ['./game-navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GameNavbarComponent implements OnInit {

    constructor() {
    }

    public ngOnInit() {
    }

}