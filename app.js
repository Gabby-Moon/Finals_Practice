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
        workoutType: req.body.workoutType,
        duration: req.body.duration,
        intensity: req.body.intensity,
        workoutDate: req.body.date,
        notes: req.body.notes
    };
    workouts.push(workout);
    console.log(workouts);
    res.render('summary', { workouts });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});