import { AppointmentService } from '../../core/services/appointment.service';
import { AppointmentInterface } from '../../shered/models/interfaces';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @Output() selectedDate = new EventEmitter();

  appointment: AppointmentInterface | undefined;
  selected: Date = new Date();
  open: boolean = false;

  constructor(private appointmentService: AppointmentService) {}

  createAppointment() {
    this.selectedDate.emit(this.selected);
    this.open = true;
  }

  closeDropAndDrop() {
    this.open = false;
  }
}
