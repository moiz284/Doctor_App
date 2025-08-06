import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ...existing code...
async function main() {
  await prisma.doctor.createMany({
    data: [
      {
        name: 'Dr. Sarah Khan',
        email: 'sarah@example.com',
        specialty: 'Cardiologist',
      },
      {
        name: 'Dr. Ahmed Ali',
        email: 'ahmed@example.com',
        specialty: 'Neurologist',
      },
      {
        name: 'Dr. Fatima Noor',
        email: 'fatima@example.com',
        specialty: 'Pediatrician',
      },
      {
        name: 'Dr. John Smith',
        email: 'john.smith@example.com',
        specialty: 'Dermatologist',
      },
      {
        name: 'Dr. Emily Brown',
        email: 'emily.brown@example.com',
        specialty: 'Oncologist',
      },
      {
        name: 'Dr. Michael Lee',
        email: 'michael.lee@example.com',
        specialty: 'Orthopedic',
      },
      {
        name: 'Dr. Priya Patel',
        email: 'priya.patel@example.com',
        specialty: 'Gynecologist',
      },
      {
        name: 'Dr. Omar Hassan',
        email: 'omar.hassan@example.com',
        specialty: 'Psychiatrist',
      },
      {
        name: 'Dr. Linda Green',
        email: 'linda.green@example.com',
        specialty: 'Endocrinologist',
      },
      {
        name: 'Dr. David Kim',
        email: 'david.kim@example.com',
        specialty: 'Gastroenterologist',
      },
      {
        name: 'Dr. Maria Garcia',
        email: 'maria.garcia@example.com',
        specialty: 'Rheumatologist',
      },
      {
        name: 'Dr. James Wilson',
        email: 'james.wilson@example.com',
        specialty: 'Pulmonologist',
      },
      {
        name: 'Dr. Anna Ivanova',
        email: 'anna.ivanova@example.com',
        specialty: 'Ophthalmologist',
      },
      {
        name: 'Dr. Hassan Raza',
        email: 'hassan.raza@example.com',
        specialty: 'Urologist',
      },
      {
        name: 'Dr. Chloe Martin',
        email: 'chloe.martin@example.com',
        specialty: 'Nephrologist',
      },
      {
        name: 'Dr. Samuel Turner',
        email: 'samuel.turner@example.com',
        specialty: 'Surgeon',
      },
      {
        name: 'Dr. Aisha Siddiqui',
        email: 'aisha.siddiqui@example.com',
        specialty: 'Immunologist',
      },
      {
        name: 'Dr. Robert Clark',
        email: 'robert.clark@example.com',
        specialty: 'Radiologist',
      },
      {
        name: 'Dr. Sophie Dubois',
        email: 'sophie.dubois@example.com',
        specialty: 'Hematologist',
      },
      {
        name: 'Dr. Bilal Ahmed',
        email: 'bilal.ahmed@example.com',
        specialty: 'Anesthesiologist',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
