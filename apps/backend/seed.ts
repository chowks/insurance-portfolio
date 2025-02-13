import { DataSource } from 'typeorm';
import { Billing } from './src/billing/billing.entity';

async function seed() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Billing],
    synchronize: false, // Ensure synchronize is false to avoid overwriting the database
  });

  await dataSource.initialize();

  const billingRepository = dataSource.getRepository(Billing);

  const sampleData = [
    {
      email: 'george.bluth@yahoo.com.my',
      firstName: 'George',
      lastName: 'Bluth',
      photo: 'https://regres.in/jimg/faces/1-image.jpg',
      productCode: 4000,
      location: 'West Malaysia',
      premiumPaid: 521.03,
    },
    {
      email: 'janet.weaver@gmail.com',
      firstName: 'Janet',
      lastName: 'Weaver',
      photo: 'https://regres.in/jimg/faces/2-image.jpg',
      productCode: 5000,
      location: 'East Malaysia',
      premiumPaid: 0.0,
    },
    {
      email: 'emma.wong@mailsaur.net',
      firstName: 'Emma',
      lastName: 'Wong',
      photo: 'https://regres.in/jimg/faces/3-image.jpg',
      productCode: 5000,
      location: 'East Malaysia',
      premiumPaid: 1453.5,
    },
    {
      email: 'eve.holt@googlemail.co.uk',
      firstName: 'Eve',
      lastName: 'Holt',
      photo: 'https://regres.in/jimg/faces/4-image.jpg',
      productCode: 5000,
      location: 'East Malaysia',
      premiumPaid: 210.0,
    },
    {
      email: 'charles.morris@grabmart.com.my',
      firstName: 'Charles',
      lastName: 'Morris',
      photo: 'https://regres.in/jimg/faces/5-image.jpg',
      productCode: 4000,
      location: 'West Malaysia',
      premiumPaid: 700.0,
    },
    {
      email: 'tracey.ramos@gmail.com',
      firstName: 'Tracey',
      lastName: 'Ramos',
      photo: 'https://regres.in/jimg/faces/6-image.jpg',
      productCode: 4000,
      location: 'West Malaysia',
      premiumPaid: 0.0,
    },
    {
      email: 'michael.jackson@sony.com',
      firstName: 'Michael',
      lastName: 'Jackson',
      photo: 'https://regres.in/jimg/faces/7-image.jpg',
      productCode: 5000,
      location: 'East Malaysia',
      premiumPaid: 0.0,
    },
    {
      email: 'gwen.ferguson@bluebottle.com',
      firstName: 'Gwendolyn',
      lastName: 'Ferguson',
      photo: 'https://regres.in/jimg/faces/8-image.jpg',
      productCode: 4000,
      location: 'West Malaysia',
      premiumPaid: 342.2,
    },
    {
      email: 'tobias.funke@docomo.co.jp',
      firstName: 'Tobias',
      lastName: 'Funke',
      photo: 'https://regres.in/jimg/faces/9-image.jpg',
      productCode: 4000,
      location: 'East Malaysia',
      premiumPaid: 95.55,
    },
    {
      email: 'byron.fields@gmail.com',
      firstName: 'Byron',
      lastName: 'Fields',
      photo: 'https://regres.in/jimg/faces/10-image.jpg',
      productCode: 4000,
      location: 'West Malaysia',
      premiumPaid: 0.0,
    },
    {
      email: 'george.edwards@yahoo.co.id',
      firstName: 'George',
      lastName: 'Edwards',
      photo: 'https://regres.in/jimg/faces/11-image.jpg',
      productCode: 5000,
      location: 'East Malaysia',
      premiumPaid: 105.9,
    },
    {
      email: 'rachel.winterson@altavista.com',
      firstName: 'Rachel',
      lastName: 'Winterson',
      photo: 'https://regres.in/jimg/faces/12-image.jpg',
      productCode: 4000,
      location: 'West Malaysia',
      premiumPaid: 0.0,
    },
  ];

  // Insert sample data into the database
  await billingRepository.save(sampleData);

  console.log('Sample data has been inserted successfully!');

  await dataSource.destroy();
}

seed().catch((error) => console.error('Error seeding data:', error));
