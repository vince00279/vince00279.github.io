import {Component} from '@angular/core';
import {Home} from './home/home';
import {Details} from './details/details';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [Home, Details, RouterModule],
  template: `
    <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
