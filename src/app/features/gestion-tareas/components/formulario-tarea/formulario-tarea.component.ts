import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Tarea } from '@gestion-tareas/models/tarea';
import { TareaDto } from '@gestion-tareas/models/tarea-dto';
import { Modal } from '@shared/util/modal';

@Component({
  selector: 'smart-formulario-tarea',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-tarea.component.html',
  standalone: true,
  styleUrl: './formulario-tarea.component.scss'
})
export class FormularioTareaComponent implements OnInit, OnChanges {

  @Input({ required: true }) tarea!: Tarea | undefined;
  @Output() crear: EventEmitter<TareaDto> = new EventEmitter<TareaDto>();
  @Output() actualizar: EventEmitter<Tarea> = new EventEmitter<Tarea>();

  private formBuilder: FormBuilder = inject(FormBuilder);
  formulario!: FormGroup;

  deshabilitarFormulario: boolean = false;

  ngOnInit(): void {
    this.construirFormulario();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.construirFormulario();
    if (changes['tarea']?.currentValue) {
      this.formulario.patchValue(changes['tarea'].currentValue);
    }
    this.actualizarEstadoEdicion();
  }

  private construirFormulario(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      estado: ['PENDIENTE', [Validators.required]]
    });
  }

  private actualizarEstadoEdicion(): void {
    const estado = this.formulario.get('estado')?.value;
    this.deshabilitarFormulario = estado === 'COMPLETADA' || estado === 'CANCELADA';

    if (this.deshabilitarFormulario) {
      this.formulario.disable();
    } else {
      this.formulario.enable();
    }
  }

  public ejecutar(): void {
    if (this.formulario.invalid || this.deshabilitarFormulario) return;

    if (this.tarea) {
      this.actualizar.emit({ id: this.tarea.id, ...this.formulario.value });
    } else {
      this.crear.emit(this.formulario.value);
    }

    this.formulario.reset();
  }

  public cerrar(): void {
    Modal.hide('formulario');
    this.formulario.reset();
  }

}
