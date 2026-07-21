import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MenuService } from '../../services/menu';

@Component({
  selector: 'app-plato-detalle',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './plato-detalle.html',
  styleUrl: './plato-detalle.scss',
})
export class PlatoDetalle {
  private menuService = inject(MenuService);
  private route = inject(ActivatedRoute);

  cargando = this.menuService.cargando;
  error = this.menuService.error;

  plato = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return this.menuService
      .menuData()
      ?.categorias.flatMap((categoria) => categoria.platos)
      .find((plato) => plato.id === id);
  });
}
