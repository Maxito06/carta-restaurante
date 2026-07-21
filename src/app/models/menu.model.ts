export interface Plato {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  disponible: boolean;
}

export interface Categoria {
  id: string;
  nombre: string;
  platos: Plato[];
}

export interface Restaurante {
  nombre: string;
  logo: string;
  descripcion: string;
}

export interface MenuData {
  restaurante: Restaurante;
  categorias: Categoria[];
}
