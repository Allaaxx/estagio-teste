import { server } from './server/Server';


const startServer = () => {
  server.listen(3333, () => {
    console.log(`Ctrl + Left click: http://localhost:3333`);
  });
};

startServer();


