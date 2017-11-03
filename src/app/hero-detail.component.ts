import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component ({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    constructor(private heroService: HeroService, private location: Location, private activateRoute: ActivatedRoute) {
    }

    @Input() hero: Hero;

    ngOnInit() {
        this.activateRoute.paramMap.switchMap( ( params: ParamMap ) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}
