// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './bookings/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // <- this makes it available in all modules automatically
    }),
    BookingModule,
    PrismaModule,
    AuthModule,
    DoctorsModule,
  ],
})
export class AppModule {}
