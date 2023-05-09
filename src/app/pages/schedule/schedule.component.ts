import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../core/services/appointment.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  appointmants: any[] = [];
  expandedIndex = 0;
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointmants, event.previousIndex, event.currentIndex);
  }

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.appointmants = this.appointmentService.getappointment();
  }

  deleteAppointmant(id: string) {
    const index = this.appointmants.findIndex(
      (appointmant) => appointmant.id === id
    );
    this.appointmants.splice(index, 1);
    this.appointmentService.atualizarLocalStorege();
    alert('Appointment deleted succesfully!');
  }
}
