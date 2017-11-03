import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['/src/styles.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.dir(this.selectedHero);
  }

  getHeroes() {
    this.heroService.getHeroes().then( (heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnInit() {
    this.getHeroes();
  }
}
