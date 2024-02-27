import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  const router = inject(Router);
  if (authServ.isUserLogged) {
    return true;
  } else {
    alert('You need to login');
    router.navigate(['/login']);
    return false;
  }
};
