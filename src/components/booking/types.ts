export interface BookingFormData {
  service: string;
  duration: string;
  date: Date;
  time: string;
  name: string;
  phone: string;
  countryCode: string;
}

export interface BookingErrors {
  name: string;
  phone: string;
}
