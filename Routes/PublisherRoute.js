const express = require('express');
const router = express.Router();
router.use(express.json());

const PublisherController = require("../Controllers/PublisherController");

router.get('/', PublisherController.Default);

router.get('/list', PublisherController.DisplayPublisher);

router.post('/add', PublisherController.AddPublisher);

router.put('/edit/:id', PublisherController.UpdatePublisher);

router.delete('/delete/:id', PublisherController.DeletePublisher);

module.exports = router;