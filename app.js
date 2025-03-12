import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = 3000;
const workouts = [];

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/summary', (req, res) => {
    const workout = {

    };
    workouts.push(workout);
    res.render('summary', workouts);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});