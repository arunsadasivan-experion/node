define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "User login",
    "name": "Login",
    "group": "Auth",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"_id\":\"58a9b4c77f2ce72c6748c672\",\"email\":\"anoop.pr@experionglobal.com\",\"name\":\"Anoop P R\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/auth/auth.controller.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/auth",
    "title": "User logout",
    "name": "Logout",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/auth/auth.controller.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Signup user",
    "name": "Signup",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"_id\":\"58a9b4c77f2ce72c6748c672\",\"email\":\"anoop.pr@experionglobal.com\",\"name\":\"Anoop P R\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user information",
    "name": "getUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"_id\":\"58a9b4c77f2ce72c6748c672\",\"email\":\"anoop.pr@experionglobal.com\",\"name\":\"Anoop P R\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all users",
    "name": "listUsers",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\"_id\":\"58a9bd089e75b138939500c6\",\"email\":\"ajeesh.ag@experionglobal.com\",\"name\":\"Ajeesh A G\"},{\"_id\":\"58a9b4c77f2ce72c6748c672\",\"email\":\"anoop.pr@experionglobal.com\",\"name\":\"Anoop P R\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.controller.js",
    "groupTitle": "Users"
  }
] });
