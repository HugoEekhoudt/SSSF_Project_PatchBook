'use strict';
const express = require('express');
const router = express.Router();
const patchController = require('../controllers/patchController');

const login = (req, res, next) => {
    if(req.user){
        next()
    }else{
        res.redirect('/api/login')
    }
  }

/**
     * @api {get} /api/patches getAllPatches
     * @apiGroup Patch
     * @apiSuccess {json} patches
     */
router.get('/patches', login, (req, res) => {
    patchController.patches_list_get().then((result) => {
        res.send(result);
    });
});

/**
     * @api {get} /api/patch getSinglePatch
     * @apiGroup Patch
     * @apiParam {String} idOfPatch
     * @apiSuccess {json} patch
     */
    router.get('/patch', (req, res) => {
        const data = req.query.idOfPatch;
        patchController.patch_get_single(data).then((result) => {
            res.send(result);
        });
    });

/**
     * @api {post} /api/patch patchSinglePatch
     * @apiGroup Patch
     * @apiParam {String} idOfPatchToUpdate
     * @apiParam {String} name
     * @apiParam {String} description
     * @apiParam {String} image
     * @apiSuccess {json} patch
     */
router.post('/patch', (req, res) => {
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