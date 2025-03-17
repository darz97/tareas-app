import { Component } from '@angular/core';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '@core/components/header/header/header.component';

@Component({
  selector: 'smart-main',
  imports: [HeaderComponent,NgxSpinnerModule,RouterOutlet],
  standalone:true,
  templateUrl: './main.component.html'
})
export class MainComponent {

}
