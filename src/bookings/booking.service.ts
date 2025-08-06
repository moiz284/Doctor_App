import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking-dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async createBooking(dto: CreateBookingDto, userId: number) {
    console.log('userId', userId);
    const existing = await this.prisma.booking.findFirst({
      where: {
        doctorId: dto.doctorId,
        date: new Date(dto.date),
        time: dto.time,
      },
    });

    if (existing) {
      throw new ForbiddenException('This time slot is already booked');
    }

    return this.prisma.booking.create({
      data: {
        doctorId: dto.doctorId,
        userId: userId,
        date: new Date(dto.date),
        time: dto.time,
      },
    });
  }

  async getUserBookings(userId: number) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: { doctor: true },
    });
  }
}
