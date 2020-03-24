import Router from 'koa-router';
import _ from 'lodash';

import ctrl from '../controller/category';
import validator from '../validator/category';
import tryCatch from '../component/wrapper'

const router = new Router();

router
  /**
   * @api {get} /categoryList Get Category list
   * @apiName GetCategoryList
   * @apiGroup Category
   *
   * @apiSuccess {Objects[]} . Category object.
   * @apiSuccess {String} ._id ID of the Category.
   * @apiSuccess {String} .title Title of the Category.
   * @apiSuccess {Date} .create Create of the Category.
   * @apiSuccess {Date} .update Update of the Category.
   * @apiSuccess {String} .parent_id Parent ID of the Category.
   *
   * @apiSuccessExample Success-Response:
   *     [
   *       {
   *         "_id": "2",
   *         "title": "Title",
   *         "create": "Mon Mar 02 2020 16:38:10 GMT+0200",
   *         "update": "Mon Mar 02 2020 16:38:10 GMT+0200",
   *         "parent_id": "1"
   *       }
   *     ]
   */
  .get('/category', tryCatch( () => ctrl.getAll()))

  /**
   * @api {get} /category/:id Get Category
   * @apiName GetCategory
   * @apiGroup Category
   *
   * @apiSuccess {Objects[]} . Category object.
   * @apiSuccess {String} ._id ID of the Category.
   * @apiSuccess {String} .title Title of the Category.
   * @apiSuccess {Date} .create Create of the Category.
   * @apiSuccess {Date} .update Update of the Category.
   * @apiSuccess {String} .parent_id Parent ID of the Category.
   *
   * @apiSuccessExample Success-Response:
   *     {
   *       "category": Category,
   *       "categoryList": Category[],
   *       "recipeList": Recipe[],
   *       "articleList": Article[]
   *     }
   */
  .get('/category/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return ctrl.getOne(ctx.params.id);
  }))

  /**
   * @api {post} /category Create Category
   * @apiName PostCategory
   * @apiGroup Category
   *
   * @apiParam {String} title Title of the Category.
   * @apiParam {String} parent_id Parent ID of the Category.
   *
   * @apiParamExample Request-Example:
   *     {
   *       "title": "Title",
   *       "parent_id": null
   *     }
   *
   * @apiSuccess {Objects[]} . Category object.
   * @apiSuccess {String} ._id ID of the Category.
   * @apiSuccess {String} .title Title of the Category.
   * @apiSuccess {Date} .create Create of the Category.
   * @apiSuccess {Date} .update Update of the Category.
   * @apiSuccess {String} .parent_id Parent ID of the Category.
   *
   * @apiSuccessExample Success-Response:
   *     {
   *       "_id": "2",
   *       "title": "Title",
   *       "create": "Mon Mar 02 2020 16:38:10 GMT+0200",
   *       "update": "Mon Mar 02 2020 16:38:10 GMT+0200",
   *       "parent_id": "1"
   *     }
   */
  .post('/category', tryCatch(async (ctx) => {
    await validator.checkCategory(ctx.request.body);
    return ctrl.create(ctx.request.body);
  }))

  /**
   * @api {put} /category/:id Edit Category
   * @apiName EditCategory
   * @apiGroup Category
   *
   * @apiParam {String} title Title of the Category.
   * @apiParam {String} parent_id Parent ID of the Category.
   *
   * @apiParamExample Request-Example:
   *     {
   *       "title": "Title",
   *       "parent_id": null
   *     }
   *
   * @apiSuccess {Objects[]} . Category object.
   * @apiSuccess {String} ._id ID of the Category.
   * @apiSuccess {String} .title Title of the Category.
   * @apiSuccess {Date} .create Create of the Category.
   * @apiSuccess {Date} .update Update of the Category.
   * @apiSuccess {String} .parent_id Parent ID of the Category.
   *
   * @apiSuccessExample Success-Response:
   *     {
   *       "_id": "2",
   *       "title": "Title",
   *       "create": "Mon Mar 02 2020 16:38:10 GMT+0200",
   *       "update": "Mon Mar 02 2020 16:38:10 GMT+0200",
   *       "parent_id": "1"
   *     }
   */
  .put('/category/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    await validator.checkCategory(ctx.request.body);
    return ctrl.edit(ctx.params.id, ctx.request.body);
  }))

  /**
   * @api {delete} /category/:id Remove Category
   * @apiName DeleteCategory
   * @apiGroup Category
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 Success
   */
  .delete('/category/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return ctrl.remove(ctx.params.id);
  }));

export default router;
