import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,  } from '@ionic/angular/standalone';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ProductCardComponent],
})
export class HomePage {

}
