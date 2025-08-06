import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsInt()
  doctorId: number;

  @IsDateString()
  date: string;

  @IsString()
  time: string; // e.g., '14:00'
}
