import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import {HousingService} from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <div class="home-wrapper">
      <section class="hero">
        <div class="hero-content">
          <p class="hero-eyebrow">Garde • Alpuerto</p>
          <h1>Shirts tailored for every moment.</h1>
          <p class="hero-subtitle">
            Organic cotton, breathable linen, and sculpted cuts designed for coffee runs, client calls, and everything between.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#listings">Shop the lineup</a>
            <button class="btn secondary" type="button" (click)="scrollToListings()">Find your fit</button>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">60+</span>
              <span class="stat-label">Signature cuts</span>
            </div>
            <div class="stat">
              <span class="stat-value">18</span>
              <span class="stat-label">Hand-dyed palettes</span>
            </div>
            <div class="stat">
              <span class="stat-value">4.9</span>
              <span class="stat-label">Average rating</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <img
              class="hero-image"
              [src]="heroPhoto"
              alt="Showcase shirt profile"
              crossorigin
            />
            <div class="hero-card-body">
              <p class="card-title">Sable Studio Oxford</p>
              <p class="card-location">Bone + Indigo</p>
              <p class="card-price">250 pesos</p>
            </div>
          </div>
          <div class="hero-badge">
            <span>Clothing Shop</span>
            <strong>Gabaldon Campus</strong>
          </div>
        </div>
      </section>

      <section class="main-content" id="listings">
        <div class="content-header">
          <h2>Featured shirts</h2>
          <p>Filter by brand, fabric, or silhouette to discover your next staple.</p>
        </div>
        <form class="search-form">
          <input 
            type="text" 
            placeholder="Search by brand, fabric, or style" 
            #filter
            (input)="filterResults(filter.value)"
          />
          <button class="btn primary search-btn" type="button" (click)="filterResults(filter.value)">Find style</button>
        </form>
        <section class="results">
          @for(housingLocation of filteredLocationList; track $index) {
            <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
          }
        </section>
      </section>
      <section class="hero">
        <div class="hero-content">
          <p class="hero-eyebrow">Owner Information</p>
          
          <p class="hero-subtitle">
            An aspiring Web Developer committed to building a successful career in the tech industry. Driven by passion and continuous learning, aiming to develop high-quality digital product.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#listings">Vincent Paul D. Garde</a>
            <a class="btn primary" href="#listings">Lhenard B. Alpuerto</a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-values">3yrs exp</span>
              <span class="stat-label">Front-End Developers</span>
            </div>
            <div class="stat">
              <span class="stat-values">2yrs exp</span>
              <span class="stat-label">Back-End Developers</span>
            </div>
            <div class="stat">
              <span class="stat-values">4yrs exp</span>
              <span class="stat-label">Graphic Designers and Video Editors</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <img
              class="hero-imageS"
              [src]="heroPhotos"
              alt="Showcase shirt profile"
              crossorigin
            />
           
          </div>
          <div class="hero-badges">
            <span>4th year student</span>
            <strong>Major in WST</strong>
          </div>
        </div>
      </section>

    </div>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
  readonly heroPhoto = '/organic.webp';
  readonly heroPhotos = '/img13.jpg';

  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];

  constructor(
    private housingService: HousingService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    const query = text.toLowerCase();
    this.filteredLocationList = this.housingLocationList.filter(
      product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.colorway.toLowerCase().includes(query)
    );
  }

  scrollToListings() {
    const section = this.document?.getElementById('listings');
    section?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
