
  export interface Usuario {
    $key?: string;
    nombre?: string;
    correo?: string;
    password?: string;
    creadoEn?: Date;
  }


  export interface Meta {
    $key?: string;
    usuario?: Usuario;
    capital?: number;
    valorDia?: number;
    ahorro?: number;
    gasto?: number;
    creadoEn?: Date;
}

export interface Movimiento {
    $key?: string;
    usuario?: Usuario;
    movimiento?: TipoMovimiento;
    valor?: number;
    creadoEn?: Date;
}


export interface TipoMovimiento {
    $key?: string;
    nombre?: string;
}
