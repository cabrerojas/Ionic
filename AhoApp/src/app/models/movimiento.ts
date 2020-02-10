import { Usuario } from './usuario';
import { TipoMovimiento } from './tipo-movimiento';

export class Movimiento {
    $key: string;
    usuario: Usuario;
    movimiento: TipoMovimiento;
    valor: number;
    creadoEn: Date;
}
