import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../housing';
import { HousingLocationInfo } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  housingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
