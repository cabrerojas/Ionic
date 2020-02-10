import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Usuario) {
    return this.bookingListRef.push({
      nombre: apt.nombre,
      correo: apt.correo,
      password: apt.password,
      creadoEn: new Date()
    });
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/usuario/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/usuario');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Usuario) {
    return this.bookingRef.update({
      nombre: apt.nombre,
      correo: apt.correo,
      password: apt.password,
      creadoEn: new Date()
    });
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/usuario/' + id);
    this.bookingRef.remove();
  }

}
