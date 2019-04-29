'use strict';
const express = require('express');
const router = express.Router();
const patchController = require('../controllers/patchController');

/**
     * @api {get} /api/patches getAllPatches
     * @apiGroup Patch
     * @apiSuccess {json} patches
     */
router.get('/patches', (req, res) => {
    patchController.patches_list_get().then((result) => {
        res.send(result);
    });
});

/**
     * @api {patch} /api/patch patchSinglePatch
     * @apiGroup Patch
     * @apiParam {String} idOfPatchToUpdate
     * @apiParam {String} name
     * @apiParam {String} description
     * @apiParam {String} image
     * @apiSuccess {json} patch
     */
router.patch('/patch', (req, res) => {
    const data = req.body;
    patchController.patch_update_single(data).then((result) => {
        res.send(result);
    });
});

/**
     * @api {delete} /api/patch deleteSinglePatch
     * @apiGroup Patch
     * @apiParam {String} patchID
     * @apiSuccess {json} patch
     */
router.delete('/patch', (req, res) => {
    patchController.patch_delete_single(req.query.patchID).then((result) => {
        res.send(result);
    });
});

module.exports = router;