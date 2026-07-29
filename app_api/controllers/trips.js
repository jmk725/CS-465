const Trip = require('../models/travlr');

// GET all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (err) {
        res.status(404).json(err);
    }
};

// GET one trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode });

        if (!trip) {
            return res.status(404).json({
                "message": "Trip not found"
            });
        }

        res.status(200).json(trip);

    } catch (err) {
        res.status(404).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};