import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

const BTN_ACCEPT = 'Entendido';
const BTN_CANCEL = 'Cancelar';
export enum BUTTON_COLOR {
  PRIMARY = '#dead00',
  SECONDARY = '#060e7b',
  TERTIARY = '#5c77cf',
  SUCCESS = '#1AAA3E',
  INFO = '#3088fb',
  WARNING = '#ffc107',
  DELETE = '#d33',
  DANGER = '#ff5757',
}

export interface ParametrosAlerta {
  html: string;
  titulo?: string;
  icono?: SweetAlertIcon;
  colorBoton?: BUTTON_COLOR;
  textoBotonConfirmacion?: string;
}

export class Alerta {
  private constructor() {}


  static personalizada(parametro: ParametrosAlerta): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: parametro.icono || 'question',
      title: parametro.titulo,
      html: parametro.html,
      confirmButtonText: parametro.textoBotonConfirmacion || BTN_ACCEPT,
      confirmButtonColor: parametro.colorBoton || BUTTON_COLOR.SECONDARY,
    });
  }


  static confirmacionPersonalizada(parametro: ParametrosAlerta): Promise<SweetAlertResult> {
    return Swal.fire({
      html: parametro.html,
      title: parametro.titulo,
      icon: parametro.icono || 'question',
      showCancelButton: true,
      confirmButtonColor: parametro.colorBoton || BUTTON_COLOR.SUCCESS,
      cancelButtonColor: '#828282',
      confirmButtonText: parametro.textoBotonConfirmacion || 'Confirmar',
      cancelButtonText: BTN_CANCEL,
      reverseButtons: true,
    });
  }
}
