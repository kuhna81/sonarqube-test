import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

	data: any;
	error = '';

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.apiService.getData().subscribe({
			next: (response) => {
				this.data = response;
			},
			error: (err) => {
				this.error = err.message;
			}
		});
	}
}
