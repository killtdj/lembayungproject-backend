import { ConnectionOptions, createConnection } from 'typeorm';
import { LoaderEnv } from '../config/loader';

async function run() {
  // init connection
  const connection = await createConnection(
    LoaderEnv.getTypeOrmConfig() as ConnectionOptions,
  );
  // Close connection after running seeder.
  await connection.close();
}

(async function () {
  console.log(`Running seeder...`);
  try {
    await run();
  } catch (error) {
    console.error('Seed error', error);
    throw error;
  }
  console.log('Seeder successfully applied!');
})();
