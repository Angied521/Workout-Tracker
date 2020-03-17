const router = require('express').Router()
const Workout = require('../models/workout.js')

router.post('/api/workouts', ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

router.get('/api/workouts', (req, res) => {
  Transaction.find()

    .then(dbWorkouts => {
      res.json(dbWorkouts)
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

module.exports = router
