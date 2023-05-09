export interface AppointmentInterface {
  id?: number | string;
  title: string;
  date: Date;
  time: string;
  description?: string;
}
