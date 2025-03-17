import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {Modal} from '@shared/util/modal';
import {CommonModule} from '@angular/common';
import {FormularioTareaComponent} from '@gestion-tareas/components/formulario-tarea/formulario-tarea.component';
import {Tarea} from '@gestion-tareas/models/tarea';
import {TareaService} from '@gestion-tareas/services/tarea.service';
import {TareaDto} from '@gestion-tareas/models/tarea-dto';
import {EstadoTareaPipe} from '@gestion-tareas/pipes/estado-tarea.pipe';
import {Alerta, BUTTON_COLOR, ParametrosAlerta} from '@shared/util/alerta';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NgxSpinnerService} from 'ngx-spinner';
import {TareaPorEstadoPipe} from '@gestion-tareas/pipes/tarea-por-estado.pipe';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NombreEstadoPipe} from '@gestion-tareas/pipes/nombre-estado.pipe';

@Component({
  selector: 'smart-gestion-tareas',
  imports: [CommonModule,
    FormularioTareaComponent,
    EstadoTareaPipe,
    TareaPorEstadoPipe,
  ReactiveFormsModule,
    NombreEstadoPipe
  ],
  standalone: true,
  templateUrl: './gestion-tareas.component.html',
  styleUrl: './gestion-tareas.component.scss'
})
export class GestionTareasComponent implements OnInit {

  private readonly tareaService = inject(TareaService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly spinner = inject(NgxSpinnerService);

  tareas= signal<Tarea[]>([]);
  tarea!: Tarea | undefined;

  estadoTarea = new FormControl('');

  ngOnInit(): void {
    this.obtenerTareas();

  }

  crear(tarea?: Tarea) {
    this.tarea = tarea;
    Modal.show('formulario');
  }

  guardar(tarea: TareaDto): void {
    Modal.hide('formulario');
    this.spinner.show();
    this.tareaService.agregarTarea(tarea).then(() => {
      this.spinner.hide();
      const params: ParametrosAlerta = {
        html: 'Las tarea se ha guardado correctamente.',
        icono: 'success',
        colorBoton: BUTTON_COLOR.SUCCESS,
        textoBotonConfirmacion: 'Aceptar',
      };
      Alerta.personalizada(params).then();
    });
  }


  actualizar(tarea: Tarea): void {
    this.spinner.show();
    Modal.hide('formulario');
    this.tareaService.actualizarTarea(tarea.id.toString(), tarea).then(() => {
      this.spinner.hide();
      const params: ParametrosAlerta = {
        html: 'Las tarea se ha actualizado correctamente.',
        icono: 'success',
        colorBoton: BUTTON_COLOR.SUCCESS,
        textoBotonConfirmacion: 'Aceptar',
      };

      Alerta.personalizada(params).then();
    });
  }

  eliminar(id: number): void {

    const parametros: ParametrosAlerta = {
      html: '¿Estas seguro que deseas eliminar la tarea? ',
      textoBotonConfirmacion: 'Aceptar',
      colorBoton: BUTTON_COLOR.INFO,
    };

    Alerta.confirmacionPersonalizada(parametros).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.tareaService.eliminarTarea(id.toString()).then(() => {
          this.spinner.hide();
          const params: ParametrosAlerta = {
            html: 'Las tarea se han eliminado correctamente.',
            icono: 'success',
            colorBoton: BUTTON_COLOR.SUCCESS,
            textoBotonConfirmacion: 'Aceptar',
          };
          Alerta.personalizada(params).then();
        });
      }
    });

  }

  private obtenerTareas(): void {
    this.spinner.show();
    this.tareaService.obtenerTareas().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (tareas: Tarea[]) => {
          console.log(tareas)
          this.tareas.set([...tareas]);
          this.spinner.hide();
        }
      }
    );
  }

}
