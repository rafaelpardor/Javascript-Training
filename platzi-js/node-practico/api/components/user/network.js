const express = require('express');
const router = express.Router();

const response = require('../../../network/response');
const controller = require('./index');

router.get('/', function (req, res) {
    controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        }).catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.get('/:id', function (req, res) {
    controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
            console.log(error)
        }).cathc((err) => {
            response.error(req, res, err.message, 500);
        })
    response.success(req, res, user, 200);
});

module.exports = router;