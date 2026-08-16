const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const ctrlTrips = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Authenticate JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.auth = verified;
    next();
  });
}

// Authentication routes
router
  .route('/register')
  .post(authController.register);

router
  .route('/login')
  .post(authController.login);

// Trips
router
  .route('/trips')
  .get(ctrlTrips.tripsList)
  .post(authenticateJWT, ctrlTrips.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode)
  .put(authenticateJWT, ctrlTrips.tripsUpdateTrip)
  .delete(authenticateJWT, ctrlTrips.tripsDeleteTrip);

module.exports = router;