const express = require('express');
const router = express.Router();
router.use(express.json());

const AdController = require("../Controllers/AdController");

router.get('/', AdController.Default);

router.post('/add', AdController.AddAD);

router.get('/list', AdController.DisplayAd);

router.put('/edit/:id', AdController.UpdateAd);

router.delete('/delete/:id', AdController.DeleteAd);

router.get('/pname/:name', AdController.PublisherWiseAd);

module.exports = router;