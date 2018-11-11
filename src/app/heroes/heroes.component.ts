import { Component, OnInit } from '@angular/core';
// import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  // selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  // hero: Hero = {
  //   id: 1,
  //   name: 'windstorm'
  // };

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
