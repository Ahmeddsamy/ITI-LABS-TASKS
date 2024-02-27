import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userLog!: boolean;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authServ.getUserState().subscribe({
      next: (state) => {
        this.userLog = state;
      },
    });
  }

  changeUserState(): void {
    if (this.userLog) {
      this.router.navigate(['/login']);
      this.authServ.logout();
    } else {
      this.router.navigate(['/cart']);
      this.authServ.login('user', 'password');
    }
  }
}
