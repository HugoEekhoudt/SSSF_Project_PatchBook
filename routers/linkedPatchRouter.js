'use strict';
const express = require('express');
const router = express.Router();
const linkedPatchController = require('../controllers/linkedPatchController');

/**
     * @api {post} /api/linkedpatch postSingleLinkedpatch
     * @apiGroup LinkedPatch
     * @apiParam {String} patchID
     * @apiParam {String} userID
     * @apiSuccess {json} linkedpatch
     */
router.post('/linkedpatch', (req, res) => {
    const data = req.body;
    linkedPatchController.linkedpatch_create_post(data).then((result) => {
        res.send(result);
    });
});

module.exports = router;