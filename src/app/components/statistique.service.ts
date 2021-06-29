import {Injectable} from 'angular2/core';
import {Statistique} from './statistique';

@Injectable()
export class StatistiqueService {
	movies: Statistique[] = [
		new Statistique('stat1', 1000),
		new Statistique('stat2', 3000),
	];
	
	getAllStatistiques() {
		this.statistique = ['stat1', 'stat2'];
		return this.statistique;
	}
	
	addStatistique(statistiqueTitle) {
		this.statistique.push(statistiqueTitle);
	}
}