import { MongooseModuleOptions } from '@nestjs/mongoose';

const MONGO_URI =
  'mongodb+srv://jacopomariniwd:uGGvhMkqDbMiDI0d@cluster0.uf5qt3t.mongodb.net/users';

export const mongoConfig: MongooseModuleOptions = {
  uri: MONGO_URI,
};
