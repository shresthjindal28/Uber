const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')
const mapController = require('../controllers/maps.controller')
const {query} = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({min:3}).withMessage('Address must be at least 3 characters long'),
    authMiddleware.authUser, mapController.getCoordinates
)

module.exports = router;