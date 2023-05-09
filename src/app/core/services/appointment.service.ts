import { Injectable } from '@angular/core';
import { AppointmentInterface } from '../../shered/models/interfaces';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointment: AppointmentInterface[];

  constructor() {
    this.appointment = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getappointment() {
    return this.appointment;
  }

  createAppointment(
    title: string,
    date: Date,
    time: string,
    description: string
  ) {
    const id = this.appointment.length + 1;
    const item: AppointmentInterface = {
      id: id,
      title: title,
      date: date,
      time: time,
      description: description,
    };

    return item;
  }

  AddInAppointmentList(
    title: string,
    date: Date,
    time: string,
    description: string
  ): Observable<any> {
    const item = this.createAppointment(title, date, time, description);

    this.appointment.push(item);

    let appointmentMap = new Map();
    this.appointment.map((appointment, index) => {
      appointmentMap.set(index, appointment);
    });
    const appointmentFrom = from(appointmentMap);
    appointmentFrom.subscribe({
      next: () => {
        return appointmentMap;
      },
      error: (error) => {
        return console.log(error);
      },
    });

    this.atualizarLocalStorege();

    return appointmentFrom;
  }

  atualizarLocalStorege() {
    localStorage.setItem('itens', JSON.stringify(this.appointment));
  }
}
