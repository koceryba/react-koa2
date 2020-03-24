import Router from 'koa-router';
import ctrl from "../controller/article";
import tryCatch from "../component/wrapper";
import validator from "../validator/article";

const router = new Router();

/**
 * @api {get} /article/:id Get Article
 * @apiName GetArticle
 * @apiGroup Article
 *
 * @apiSuccess {String} _id ID of the Article.
 * @apiSuccess {String} title Title of the Article.
 * @apiSuccess {String} description Description of the Article.
 * @apiSuccess {String} text Text of the Article.
 * @apiSuccess {Date} create Create of the Article.
 * @apiSuccess {Date} update Update of the Article.
 * @apiSuccess {String} category_id Category ID of the Article.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "_id": "2",
 *       "title": "Title",
 *       "description": "Description",
 *       "text": "Text",
 *       "create": "Mon Mar 02 2020 16:38:10 GMT+0200",
 *       "update": "Mon Mar 02 2020 16:38:10 GMT+0200",
 *       "category_id": "1"
 *     }
 */
/**
 * @api {post} /article Create Article
 * @apiName PostArticle
 * @apiGroup Article
 *
 * @apiParam {String} title Title of the Article.
 * @apiParam {String} description Description of the Article.
 * @apiParam {String} text Text of the Article.
 * @apiParam {String} category_id Category ID of the Article.
 *
 * @apiParamExample Request-Example:
 *     {
 *       "title": "Title",
 *       "description": "Description",
 *       "text": "Text",
 *       "category_id": "1"
 *     }
 *
 * @apiSuccess {String} _id ID of the Article.
 * @apiSuccess {String} title Title of the Article.
 * @apiSuccess {String} description Description of the Article.
 * @apiSuccess {Date} create Create of the Article.
 * @apiSuccess {Date} update Update of the Article.
 * @apiSuccess {String} category_id Category ID of the Article.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "_id": "2",
 *       "title": "Title",
 *       "description": "Description",
 *       "create": "Mon Mar 02 2020 16:38:10 GMT+0200",
 *       "update": "Mon Mar 02 2020 16:38:10 GMT+0200",
 *       "category_id": "1"
 *     }
 */
/**
 * @api {delete} /article/:id Remove Article
 * @apiName DeleteArticle
 * @apiGroup Article
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Success
 */
/**
 * @api {put} /article/:id Edit Article
 * @apiName EditArticle
 * @apiGroup Article
 *
 * @apiParam {String} title Title of the Article.
 * @apiParam {String} description Description of the Article.
 * @apiParam {String} text Text of the Article.
 * @apiParam {String} category_id Category ID of the Article.
 *
 * @apiParamExample Request-Example:
 *     {
 *       "title": "Title",
 *       "description": "Description",
 *       "text": "Text",
 *       "category_id": "1"
 *     }
 *
 * @apiSuccess {String} ._id ID of the Article.
 * @apiSuccess {String} .title Title of the Article.
 * @apiSuccess {String} .description Description of the Article.
 * @apiSuccess {String} .text Text of the Article.
 * @apiSuccess {Date} .create Create of the Article.
 * @apiSuccess {Date} .update Update of the Article.
 * @apiSuccess {String} .category_id Category ID of the Article.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "_id": "2",
 *       "title": "Title",
 *       "description": "Description",
 *       "text": "Text",
 *       "create": "Mon Mar 02 2020 16:38:10 GMT+0200",
 *       "update": "Mon Mar 02 2020 16:38:10 GMT+0200",
 *       "category_id": "1"
 *     }
 */

router
  .get('/article/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return ctrl.getOne(ctx.params.id);
  }))
  .get('/articleList/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return await ctrl.getList(ctx.params.id);
  }))
  .post('/article', tryCatch(async (ctx) => {
    await validator.checkArticle(ctx.request.body);
    return await ctrl.create(ctx.request.body);
  }))
  .put('/article/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    await validator.checkArticle(ctx.request.body);
    return await ctrl.edit(ctx.params.id, ctx.request.body);
  }))
  .delete('/article/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return await ctrl.remove(ctx.params.id);
  }));

export default router;
