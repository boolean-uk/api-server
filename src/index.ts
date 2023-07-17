import dotenv from 'dotenv';
dotenv.config();

import server from './server';

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`[server]: server is starting on port ${port}`);
});
