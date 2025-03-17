import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreEstado',
  standalone:true
})
export class NombreEstadoPipe implements PipeTransform {

  transform(estado: string): string {
    switch (estado) {
      case 'COMPLETADA':
        return 'Completada';
      case 'CANCELADA':
        return 'Cancelada';
      case 'PENDIENTE':
        return 'Pendiente';
      case 'EN_PROGRESO':
        return 'En Progreso';
      default:
        return '';
    }
  }

}
