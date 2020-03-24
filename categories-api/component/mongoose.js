import mongoose from 'mongoose';
import config from 'config';

class Mongo {
  async init() {
    const db = mongoose.connection;

    db.on('error', (error) => {
      console.error(error);
    });

    await mongoose.connect(config.mongodb.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  get db() {
    return mongoose.connection;
  }
}

export default new Mongo();
