import userRoute from './user';
import messageRoute from './message';
import contactRoute from './contact';
import groupRoute from './group';

export default (app) => {
  app.use('/api/v1', userRoute);
  app.use('/api/v1', messageRoute);
  app.use('/api/v1', contactRoute);
  app.use('/api/v1', groupRoute);
};
