import express from 'express';

// make app
const app = express();
app.use(express.urlencoded({ extended: true }));
// access ejs files
app.set('view engine', 'ejs');
// set where it finds files
app.use(express.static('public'));

const PORT = 3000;
const workouts = [];

// home route
app.get('/', (req, res) => {
    res.render('home');
});

// summary route after form is submitted
app.post('/summary', (req, res) => {
    // taking information from the form
    const workout = {
        workoutType: req.body.workoutType,
        duration: req.body.duration,
        intensity: req.body.intensity,
        workoutDate: req.body.date,
        notes: req.body.notes
    };
    workouts.push(workout);
    // test
    console.log(workouts);
    // pass it to page
    res.render('summary', { workouts });
});

// listening to port for page to run locally
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});