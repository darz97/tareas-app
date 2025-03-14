import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header/header.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'smart-main',
  imports: [HeaderComponent,NgxSpinnerModule,RouterOutlet],
  standalone:true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
