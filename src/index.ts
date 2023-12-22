import { Server } from './server';
import sequelize from './database/connection';

// create http server
export const app = Server.bootstrap().app;
export const server = app.listen(3003, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("DB connected");
  } catch (error) {
      console.log("Problem with connection", error);
  }
});