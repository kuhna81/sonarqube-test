import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api';

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
				console.log("RESPONSE:", response);
				this.data = response;
				console.log("this.data:", this.data);
			},
			error: (err) => {
				this.error = err.message;
			}
		});
	}
}
