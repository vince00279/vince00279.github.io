import {Component, input} from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Product photo of {{ housingLocation().name }}"
        crossorigin
      />
      <div class="listing-body">
        <p class="listing-brand">{{ housingLocation().brand }}</p>
        <h2 class="listing-heading">{{ housingLocation().name }}</h2>
        <p class="listing-meta">
          {{ housingLocation().category }} • {{ housingLocation().colorway }}
        </p>
        <div class="listing-footer">
          <span class="listing-price">{{ housingLocation().price }}</span>
          <button class="btn primary" (click)="openPopup()">order now</button>
        </div>
      </div>
    </section>

    <!-- Popup Modal -->
    @if (showPopup) {
      <div class="modal-overlay" (click)="closePopup()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <button class="modal-close" (click)="closePopup()">&times;</button>
          <div class="modal-body">
            <img
              class="modal-photo"
              [src]="housingLocation().photo"
              alt="Product photo of {{ housingLocation().name }}"
              crossorigin
            />
            <div class="modal-info">
              <p class="modal-brand">{{ housingLocation().brand }}</p>
              <h2 class="modal-heading">{{ housingLocation().name }}</h2>
              <p class="modal-category">{{ housingLocation().category }}</p>
              <p class="modal-colorway">Color: {{ housingLocation().colorway }}</p>
              <p class="modal-price">{{ housingLocation().price }}</p>
              <div class="modal-sizes">
                <p class="sizes-label">Available Sizes:</p>
                <div class="sizes-list">
                  @for (size of housingLocation().availableSizes; track size) {
                    <span class="size-badge">{{ size }}</span>
                  }
                </div>
              </div>
              <div class="modal-features">
                @if (housingLocation().sustainable) {
                  <span class="feature-badge sustainable">Sustainable</span>
                }
                @if (housingLocation().waterproof) {
                  <span class="feature-badge waterproof">Waterproof</span>
                }
              </div>
              <button class="btn primary modal-order-btn" (click)="closePopup()">Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
  showPopup = false;
  
  constructor(private router: Router) {}
  
  navigateToDetails() {
    this.router.navigate(['/details', this.housingLocation().id]);
  }

  openPopup() {
    this.showPopup = true;
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.showPopup = false;
    document.body.style.overflow = '';
  }
}
