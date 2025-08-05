import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // adjust path if needed
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor-dto';
@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.doctor.findMany(); // fetch all doctors
  }

  async findById(id: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }

    return doctor;
  }
  async create(dto: CreateDoctorDto) {
    return this.prisma.doctor.create({ data: dto });
  }
  async update(id: number, dto: UpdateDoctorDto) {
    await this.findById(id); // to trigger NotFoundException
    return this.prisma.doctor.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: number) {
    await this.findById(id); // to trigger NotFoundException
    return this.prisma.doctor.delete({ where: { id } });
  }
}
