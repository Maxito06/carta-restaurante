import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuService } from '../../services/menu';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  private menuService = inject(MenuService);

  menuData = this.menuService.menuData;
  cargando = this.menuService.cargando;
  error = this.menuService.error;
}
