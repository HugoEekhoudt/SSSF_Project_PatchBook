define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidocs/main.js",
    "group": "C__Users_HuGGa_Documents_SSSF_project_SSSF_Project_PatchBook_apidocs_main_js",
    "groupTitle": "C__Users_HuGGa_Documents_SSSF_project_SSSF_Project_PatchBook_apidocs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/linkedpatches",
    "title": "getAllLinkedpatches",
    "group": "LinkedPatch",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "linkedPatches",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/linkedPatchRouter.js",
    "groupTitle": "LinkedPatch",
    "name": "GetLinkedpatches"
  },
  {
    "type": "post",
    "url": "/linkedpatch",
    "title": "postSingleLinkedpatch",
    "group": "LinkedPatch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patchID",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "linkedpatch",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/linkedPatchRouter.js",
    "groupTitle": "LinkedPatch",
    "name": "PostLinkedpatch"
  },
  {
    "type": "delete",
    "url": "/patch",
    "title": "deleteSinglePatch",
    "group": "Patch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patchID",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "patch",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/patchRouter.js",
    "groupTitle": "Patch",
    "name": "DeletePatch"
  },
  {
    "type": "get",
    "url": "/patch",
    "title": "getSinglePatch",
    "group": "Patch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idOfPatch",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "patch",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/patchRouter.js",
    "groupTitle": "Patch",
    "name": "GetPatch"
  },
  {
    "type": "get",
    "url": "/patches",
    "title": "getAllPatches",
    "group": "Patch",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "patches",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/patchRouter.js",
    "groupTitle": "Patch",
    "name": "GetPatches"
  },
  {
    "type": "post",
    "url": "/patch",
    "title": "postSinglePatch",
    "group": "Patch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "patch",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/patchRouter.js",
    "groupTitle": "Patch",
    "name": "PostPatch"
  },
  {
    "type": "post",
    "url": "/updatepatch",
    "title": "patchSinglePatch",
    "group": "Patch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idOfPatchToUpdate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "patch",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/patchRouter.js",
    "groupTitle": "Patch",
    "name": "PostUpdatepatch"
  },
  {
    "type": "get",
    "url": "/ratings",
    "title": "getAllRatings",
    "group": "Rating",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "ratings",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/ratingRouter.js",
    "groupTitle": "Rating",
    "name": "GetRatings"
  },
  {
    "type": "post",
    "url": "/rating",
    "title": "postSingleRating",
    "group": "Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ratingValue",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patchID",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "rating",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/ratingRouter.js",
    "groupTitle": "Rating",
    "name": "PostRating"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "getSingleUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User",
    "name": "GetUser"
  },
  {
    "type": "get",
    "url": "/userID",
    "title": "getUserIDByLogin",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "userID",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User",
    "name": "GetUserid"
  },
  {
    "type": "patch",
    "url": "/user",
    "title": "patchSingleUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idOfUserToUpdate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "overall",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User",
    "name": "PatchUser"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "postSingleUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "overall",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User",
    "name": "PostRegister"
  }
] });
