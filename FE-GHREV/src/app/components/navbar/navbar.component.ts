import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {
    // Iscriviti al BehaviorSubject per ottenere il nome dell'utente
    this.authService.getUserNameObservable().subscribe(name => {
      this.userName = name; // Aggiorna il nome dell'utente
    });
  }

  logout() {
    this.authService.logout(); // Esegui il logout
  }

  performSearch(query: string): void {
    if (query) {
      this.router.navigate(['/search'], { queryParams: { name: query } });
    }
  }
}
