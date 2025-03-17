import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Tarea} from '@gestion-tareas/models/tarea';
import {TareaDto} from '@gestion-tareas/models/tarea-dto';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private readonly firestore = inject(Firestore);

  private readonly tareasCollection = collection(this.firestore, 'tareas');



  public obtenerTareas(): Observable<Tarea[]> {
    return collectionData(this.tareasCollection, { idField: 'id' }) as Observable<Tarea[]>;
  }


  async agregarTarea(tarea:  TareaDto): Promise<void> {
    console.log(tarea);
    await addDoc(this.tareasCollection, tarea);
  }

  async actualizarTarea(id: string, tarea: Partial<Tarea>): Promise<void> {
    const tareaRef = doc(this.firestore, `tareas/${id}`);
    await updateDoc(tareaRef, {...tarea});
  }


  async eliminarTarea(id: string): Promise<void> {
    const tareaRef = doc(this.firestore, `tareas/${id}`);
    await deleteDoc(tareaRef);
  }



}
