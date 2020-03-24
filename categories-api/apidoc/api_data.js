define({ "api": [
  {
    "type": "delete",
    "url": "/article/:id",
    "title": "Remove Article",
    "name": "DeleteArticle",
    "group": "Article",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/article/:id",
    "title": "Edit Article",
    "name": "EditArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Article.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Article.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the Article.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"text\": \"Text\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id",
            "description": "<p>ID of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".title",
            "description": "<p>Title of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".description",
            "description": "<p>Description of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".text",
            "description": "<p>Text of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".create",
            "description": "<p>Create of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".update",
            "description": "<p>Update of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".category_id",
            "description": "<p>Category ID of the Article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"text\": \"Text\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article",
    "title": "Get Article",
    "name": "GetArticle",
    "group": "Article",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>Create of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update",
            "description": "<p>Update of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"text\": \"Text\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article",
    "title": "Create Article",
    "name": "PostArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Article.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Article.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the Article.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"text\": \"Text\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>Create of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update",
            "description": "<p>Update of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "delete",
    "url": "/category/:id",
    "title": "Remove Category",
    "name": "DeleteCategory",
    "group": "Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/category/:id",
    "title": "Edit Category",
    "name": "EditCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent ID of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"Title\",\n  \"parent_id\": null\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": ".",
            "description": "<p>Category object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id",
            "description": "<p>ID of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".title",
            "description": "<p>Title of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".create",
            "description": "<p>Create of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".update",
            "description": "<p>Update of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".parent_id",
            "description": "<p>Parent ID of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"parent_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/:id",
    "title": "Get Category",
    "name": "GetCategory",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": ".",
            "description": "<p>Category object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id",
            "description": "<p>ID of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".title",
            "description": "<p>Title of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".create",
            "description": "<p>Create of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".update",
            "description": "<p>Update of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".parent_id",
            "description": "<p>Parent ID of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"category\": Category,\n  \"categoryList\": Category[],\n  \"recipeList\": Recipe[],\n  \"articleList\": Article[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categoryList",
    "title": "Get Category list",
    "name": "GetCategoryList",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": ".",
            "description": "<p>Category object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id",
            "description": "<p>ID of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".title",
            "description": "<p>Title of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".create",
            "description": "<p>Create of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".update",
            "description": "<p>Update of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".parent_id",
            "description": "<p>Parent ID of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"_id\": \"2\",\n    \"title\": \"Title\",\n    \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n    \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n    \"parent_id\": \"1\"\n  }\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "Create Category",
    "name": "PostCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent ID of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"Title\",\n  \"parent_id\": null\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": ".",
            "description": "<p>Category object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id",
            "description": "<p>ID of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".title",
            "description": "<p>Title of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".create",
            "description": "<p>Create of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": ".update",
            "description": "<p>Update of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".parent_id",
            "description": "<p>Parent ID of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"parent_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/recipe/:id",
    "title": "Remove Recipe",
    "name": "DeleteRecipe",
    "group": "Recipe",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/recipe.js",
    "groupTitle": "Recipe"
  },
  {
    "type": "put",
    "url": "/recipe/:id",
    "title": "Edit Recipe",
    "name": "EditRecipe",
    "group": "Recipe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Recipe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Recipe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Recipe.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>Create of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update",
            "description": "<p>Update of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Recipe.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/recipe.js",
    "groupTitle": "Recipe"
  },
  {
    "type": "get",
    "url": "/recipe",
    "title": "Get Recipe",
    "name": "GetRecipe",
    "group": "Recipe",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>Create of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update",
            "description": "<p>Update of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Recipe.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/recipe.js",
    "groupTitle": "Recipe"
  },
  {
    "type": "post",
    "url": "/recipe",
    "title": "Create Recipe",
    "name": "PostRecipe",
    "group": "Recipe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Recipe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Recipe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Recipe.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>Create of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update",
            "description": "<p>Update of the Recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category ID of the Recipe.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"2\",\n  \"title\": \"Title\",\n  \"description\": \"Description\",\n  \"create\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"update\": \"Mon Mar 02 2020 16:38:10 GMT+0200\",\n  \"category_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/recipe.js",
    "groupTitle": "Recipe"
  }
] });
