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
    "type": "post",
    "url": "/api/linkedpatch",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "LinkedPatch",
    "name": "PostApiLinkedpatch"
  },
  {
    "type": "delete",
    "url": "/api/patch",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "Patch",
    "name": "DeleteApiPatch"
  },
  {
    "type": "get",
    "url": "/api/patches",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "Patch",
    "name": "GetApiPatches"
  },
  {
    "type": "patch",
    "url": "/api/patch",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "Patch",
    "name": "PatchApiPatch"
  },
  {
    "type": "post",
    "url": "/api/patch",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "Patch",
    "name": "PostApiPatch"
  },
  {
    "type": "post",
    "url": "/api/rating",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "Rating",
    "name": "PostApiRating"
  },
  {
    "type": "get",
    "url": "/api/user",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "User",
    "name": "GetApiUser"
  },
  {
    "type": "patch",
    "url": "/api/user",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "User",
    "name": "PatchApiUser"
  },
  {
    "type": "post",
    "url": "/api/register",
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
    "filename": "./routers/apiRouter.js",
    "groupTitle": "User",
    "name": "PostApiRegister"
  }
] });
