import { Component, Input } from '@angular/core';

@Component({
	selector: 'music-progress',
	templateUrl: './music-progress.component.html',
	styleUrls: ['./music-progress.component.css']
})

export class MusicProgressComponent {
	// Played
	@Input() elapsed: string;
	// Total Time
	@Input() total: string;
	// Current Time
	@Input() current: number;
}