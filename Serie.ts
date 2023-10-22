export class Serie {
    numero: number;
    distribuidora: string;
    temporadas: number;
    resumen: string;
    nombre: string;
    link: string;
    imagen: string;
  
    constructor(numero: number, nombre:string, distribuidora: string,temporadas: number,resumen: string, link: string, imagen: string ) {
      this.nombre = nombre;
      this.numero = numero;
      this.distribuidora = distribuidora;
      this.link = link;
      this.resumen = resumen;
      this.temporadas = temporadas;
      this.imagen = imagen;
    }
  }
  