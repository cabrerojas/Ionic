import { Usuario } from './usuario';

export class Meta {
    $key: string;
    usuario: Usuario;
    capital: number;
    valorDia: number;
    ahorro: number;
    gasto: number;
    creadoEn: Date;
}
