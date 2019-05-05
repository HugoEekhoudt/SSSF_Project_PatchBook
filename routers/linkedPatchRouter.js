'use strict';
const express = require('express');
const router = express.Router();
const linkedPatchController = require('../controllers/linkedPatchController');

const login = (req, res, next) => {
    if(req.user){
        next()
    }else{
        res.redirect('/api/login')
    }
  }

/**
     * @api {post} /linkedpatch postSingleLinkedpatch
     * @apiGroup LinkedPatch
     * @apiParam {String} patchID
     * @apiParam {String} userID
     * @apiSuccess {json} linkedpatch
     */
router.post('/linkedpatch', login, (req, res) => {
    var data = req.body;
    data.userID = req.user.id
    linkedPatchController.linkedpatch_create_post(data).then((result) => {
        res.send(result);
    });
});

/**
     * @api {get} /linkedpatches getAllLinkedpatches
     * @apiGroup LinkedPatch
     * @apiSuccess {json} linkedPatches
     */
    router.get('/linkedpatches', (req, res) => {
        linkedPatchController.linkedpatch_list_get().then((result) => {
            res.send(result);
        });
    });

module.exports = router;