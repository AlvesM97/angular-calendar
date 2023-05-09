import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-drop-and-drop',
  templateUrl: './drop-and-drop.component.html',
  styleUrls: ['./drop-and-drop.component.scss'],
})
export class DropAndDropComponent {
  formAppointment!: FormGroup;

  @Input() selected: Date = new Date();
  @Input() open: boolean = false;
  @Output() closeDropAndDrop = new EventEmitter();

  error = false;
  submitted = false;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formAppointment = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formAppointment?.valid) {
      this.appointmentService
        .AddInAppointmentList(
          this.formAppointment.value.title,
          this.selected,
          this.formAppointment.value.time,
          this.formAppointment.value.description
        )
        .subscribe({
          next: () => (
            this.router.navigateByUrl('schedule'), (this.open = false)
          ),
          error: (error: any) => console.error(error),
        });
      alert('Appointment submitted succesfully!');
    }
  }

  closeAppointmant(event: Event) {
    event.preventDefault();
    this.formAppointment.reset();
    this.open = false;
    this.error = false;
    this.closeDropAndDrop.emit();
  }

  openAppoitmant() {
    this.open = true;
  }
}
