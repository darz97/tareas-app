import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'estadoTarea'
})
export class EstadoTareaPipe implements PipeTransform {

  transform(estado: string): string {
    switch (estado) {
      case 'COMPLETADA':
        return 'bg-success'; // Verde
      case 'CANCELADA':
        return 'bg-danger'; // Rojo
      case 'PENDIENTE':
        return 'bg-secondary'; // Gris
      case 'EN_PROGRESO':
        return 'bg-warning'; // Amarillo
      default:
        return 'bg-light'; // Color por defecto
    }
  }

}
