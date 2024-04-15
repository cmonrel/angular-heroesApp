import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-heroesApp';
}
