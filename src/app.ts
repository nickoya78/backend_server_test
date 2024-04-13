import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Add a route for /
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

export default app;


// import express from 'express';
// import cors from 'cors';
// import userRoutes from './routes/userRoutes';

// const app = express();


// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//   });

// app.use('/api/users', userRoutes);

// export default app;
