import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Configure EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Counter state
let counter = 0;

// Routes
app.get('/', (req: Request, res: Response) => {
    res.render('index', { counter });
});

app.get('/increment', (req: Request, res: Response) => {
    counter++;
    res.json({ counter });
});

app.get('/decrement', (req: Request, res: Response) => {
    counter--;
    res.json({ counter });
});

export default app;
