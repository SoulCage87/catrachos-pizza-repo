import { Component, OnInit } from '@angular/core';
import {IonCard, IonAlert, IonButton, IonImg, IonCardHeader, IonCardContent, IonLabel, IonFooter, IonItem, IonIcon} from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonAlert, IonButton, IonImg, IonCardHeader, IonCardContent, IonLabel, IonFooter, IonItem, IonIcon]
})
export class ProductCardComponent {

constructor() {
addIcons({ });
}

}
