const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Pitch = require("../models/pitch");
const Invest = require("../models/investor");
const ObjectId = mongoose.Types.ObjectId;

router.get("/", (req, res) => {
    res.send("Hello! Client , Welcome to Rishika's Xharktank Server");
})
router.get("/pitches", (req, res) => { //to fetch pitches
    try {
        Pitch.aggregate([
            {
                $lookup: {
                    from: "investors",
                    localField: "_id",
                    foreignField: "pitchId",
                    as: "offers"
                }
            },
            {
                $addFields: {
                    id: "$_id",
                    offers: {
                        id: "$_id"
                    }
                }
            },
            {
                $project: {
                    _id: 0, __v: 0,
                    offers: {
                        _id: 0, __v: 0
                    }
                }
            }
        ]).sort({ id: -1 })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
});

router.get("/pitches/:pitch_id", (req, res) => { // to take pitch detail from particular pitch id
    try {
        Pitch.aggregate([
            {
                $match: { _id: ObjectId(req.params.pitch_id) }
            },
            {
                $lookup: {
                    from: "investors",
                    localField: "_id",
                    foreignField: "pitchId",
                    as: "offers"
                },
            },
            {
                $addFields: {
                    id: "$_id",
                    offers: {
                        id: "$_id"
                    }
                }
            },
            {
                $project: {
                    _id: 0, __v: 0,
                    offers: {
                        _id: 0, __v: 0
                    }
                }
            }
        ]).sort({ id: -1 })
            .then((data) => {
                if (data.length > 0) {
                    res.status(200).json(data[0]);
                }
                else {
                    res.status(404).send("Not Found");
                }
            })
            .catch((err) => {
                res.status(404).send("Not Found");
            });
    }
    catch {
        res.status(404).send("Not Found");
    }
})

router.post("/pitches", (req, res) => { // to save a new pitch
    try {
        Pitch.create(req.body)
            .then(data => {
                res.status(201).json({
                    id: data._id
                });
            })
            .catch(() => {
                res.status(400).send("Invalid Body Request");
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
});

router.post("/pitches/:pitch_id/makeOffer", (req, res) => { // to make offer to a pitch
    try {
        Pitch.exists({ _id: req.params.pitch_id })
            .then((data) => {
                if (data === null) {
                    res.status(404).send("Not Found");
                }
                else {
                    req.body["pitchId"] = req.params.pitch_id;
                    Invest.create(req.body)
                        .then(data => {
                            res.status(201).json({
                                id: data.id
                            });
                        })
                        .catch(() => {
                            res.status(400).send("Invalid Request Body");
                        });
                }
            })
            .catch(() => {
                res.status(404).send("Not Found");
            });
    }
    catch {
        res.status(404).send("Not Found");
    }
});

module.exports = router;