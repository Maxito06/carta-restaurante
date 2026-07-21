import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { MenuData } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private http = inject(HttpClient);

  private readonly _menuData = signal<MenuData | null>(null);
  private readonly _cargando = signal<boolean>(true);
  private readonly _error = signal<string | null>(null);

  readonly menuData = this._menuData.asReadonly();
  readonly cargando = this._cargando.asReadonly();
  readonly error = this._error.asReadonly();

  constructor() {
    this.cargarMenu();
  }

  cargarMenu(): void {
    this.http.get<MenuData>('assets/data/menu.json').subscribe({
      next: (data) => {
        this._menuData.set(data);
        this._cargando.set(false);
      },
      error: () => {
        this._error.set('No se pudo cargar el menú. Intenta nuevamente más tarde.');
        this._cargando.set(false);
      },
    });
  }
}
