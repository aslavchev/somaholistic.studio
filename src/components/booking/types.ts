export interface BookingFormData {
  service: string;
  duration: string;
  date: Date;
  time: string;
  name: string;
}

export interface BookingErrors {
  name: string;
}
