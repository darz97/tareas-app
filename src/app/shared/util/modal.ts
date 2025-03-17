declare const bootstrap:any;



export class Modal {

  private constructor() {
  }

  static show(id:string):void{
    if(document.getElementById(id)){
      new bootstrap.Modal(document.getElementById(id)).show();
    }
  }

  static hide(id:string):void{
    const modal = document.getElementById(id);
    if(bootstrap.Modal.getInstance(modal) && modal){
      bootstrap.Modal.getInstance(modal).hide();
    }
  }
}

