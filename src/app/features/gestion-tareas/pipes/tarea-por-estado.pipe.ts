import { Pipe, PipeTransform } from '@angular/core';
import {Tarea} from '@gestion-tareas/models/tarea';

@Pipe({
  name: 'tareaPorEstado',
  standalone:true
})
export class TareaPorEstadoPipe implements PipeTransform {

  transform(tareas: Tarea[],estado:string| null): Tarea[] {
    if(estado === '' ){
      return tareas;
    }
    return  tareas.filter(tarea => tarea.estado === estado);
  }

}
