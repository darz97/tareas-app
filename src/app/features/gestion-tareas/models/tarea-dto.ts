import {Tarea} from '@gestion-tareas/models/tarea';

export interface TareaDto extends  Omit<Tarea, 'id'>{


}
