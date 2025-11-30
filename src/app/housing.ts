import {Injectable} from '@angular/core';
import {HousingLocationInfo} from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: HousingLocationInfo[] = [
    {
      id: 0,
      name: 'AeroFlex Tech Tee',
      brand: 'NikeLab',
      category: 'Performance Tee',
      photo: '/img1.webp',
      price: '200 pesos',
      colorway: 'Carbon Heather',
      availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      waterproof: false,
      sustainable: true,
    },
    {
      id: 1,
      name: 'Coastline Linen Button-Up',
      brand: 'Everlane',
      category: 'Relaxed Shirt',
      photo: '/img2.jpg',
      price: '300 pesos',
      colorway: 'Tide Blue',
      availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      waterproof: false,
      sustainable: true,
    },
    {
      id: 2,
      name: 'Drift Studio Overshirt',
      brand: 'COS',
      category: 'Modern Overshirt',
      photo: '/img10.webp',
      price: '450 pesos',
      colorway: 'Concrete Grey',
      availableSizes: ['S', 'M', 'L', 'XL'],
      waterproof: false,
      sustainable: true,
    },
    {
      id: 3,
      name: 'Everyday Organic Crew',
      brand: 'Uniqlo U',
      category: 'Essential Tee',
      photo: '/img3.jpg',
      price: '120 pesos',
      colorway: 'Bone White',
      availableSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
      waterproof: false,
      sustainable: true,
    },
    {
      id: 4,
      name: 'Rose District Silk Shirt',
      brand: 'Aritzia',
      category: 'Silk Button-Up',
      photo: '/img4.png',
      price: '130 pesos',
      colorway: 'Blush Bloom',
      availableSizes: ['XS', 'S', 'M', 'L'],
      waterproof: false,
      sustainable: false,
    },
    {
      id: 5,
      name: 'Mariner Popover',
      brand: 'J.Crew',
      category: 'Striped Shirt',
      photo: '/img5.webp',
      price: '200 pesos',
      colorway: 'Navy Stripe',
      availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      waterproof: false,
      sustainable: false,
    },
    {
      id: 6,
      name: 'Daybreak Boxy Tee',
      brand: 'Kotn',
      category: 'Casual Tee',
      photo: '/img8.jpg',
      price: '270 pesos',
      colorway: 'Sunrise Coral',
      availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      waterproof: false,
      sustainable: true,
    },
    {
      id: 7,
      name: 'Gallery Camp Collar',
      brand: 'Topman',
      category: 'Camp Shirt',
      photo: '/img6.webp',
      price: '300 pesos',
      colorway: 'Art Print',
      availableSizes: ['S', 'M', 'L', 'XL'],
      waterproof: false,
      sustainable: false,
    },
    {
      id: 8,
      name: 'Umbra Pleated Shirt',
      brand: 'Theory',
      category: 'Dress Shirt',
      photo: '/img7.jpg',
      price: '90 pesos',
      colorway: 'Shadow Plaid',
      availableSizes: ['14', '15', '16', '17', '18'],
      waterproof: false,
      sustainable: false,
    },
   
    
  ];

  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
