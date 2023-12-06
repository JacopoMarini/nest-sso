import { MongooseModuleOptions } from '@nestjs/mongoose';

const MONGO_URI = 'mongodb://localhost:27017/';

export const mongoConfig: MongooseModuleOptions = {
  uri: MONGO_URI,
  ...{ useNewUrlParser: true, useUnifiedTopology: true },
};
