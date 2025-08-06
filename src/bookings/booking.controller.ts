import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { BookingService } from './booking.service';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateBookingDto } from './dto/create-booking-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('bookings')
@UseGuards(AuthGuard('jwt'))
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async book(@Body() dto: CreateBookingDto, @Req() req) {
    console.log('✅ User in controller:', req.user);
    return this.bookingService.createBooking(dto, req.user.id);
  }

  @Get()
  async getMyBookings(@Req() req) {
    return this.bookingService.getUserBookings(req.user.id);
  }
}
