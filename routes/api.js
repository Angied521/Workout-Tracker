const router = require('express').Router()
const Workout = require('../models/workout.js')
// create new workout
router.post('/api/workouts', ({ body }, res) => {
  // we receive data on req.body
  console.log('=============')
  console.log(body)
  Workout.create({ exercises: [body] })
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch(err => {
      console.log(err)
      res.status(404).json(err)
    })
})

// Retrieving workouts
router.get('/api/workouts', (req, res) => {
  Workout.find()

    .then(dbWorkouts => {
      res.json(dbWorkouts)
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

// Update route
router.put('/api/workouts/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)

  // call database and update a workout
  Workout
    .update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(response => {
      console.log(response)
      res.json(response)
    })
  // we find the workout by the id aka req.params.id
  // .findAndModify({_id: req.params.id},null, {$set: {}})
  // when we find a match we will the add the exercise to that workout
  /// {$set: { id: '', type: '' }, { name: '' }, (req.body)}

  // the workout will be on req.body

  // .catch(err => {
  //   res.status(400).json(err)
  // })
})

router.get('/api/workouts/range', (req, res) => {
  Workout.find({ }).limit(7).then(range => res.json(range))
})
module.exports = router
