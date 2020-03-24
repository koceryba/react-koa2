import Router from 'koa-router';
import ctrl from "../controller/recipe";
import tryCatch from "../component/wrapper";
import validator from "../validator/recipe";

const router = new Router();

/**
 * @api {get} /recipe/:id Get Recipe
 * @apiName GetRecipe
 * @apiGroup Recipe
 *
 * @apiSuccess {String} _id ID of the Recipe.
 * @apiSuccess {String} title Title of the Recipe.
 * @apiSuccess {String} description Description of the Recipe.
 * @apiSuccess {Date} create Create of the Recipe.
 * @apiSuccess {Date} update Update of the Recipe.
 * @apiSuccess {String} category_id Category ID of the Recipe.
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
 * @api {post} /recipe Create Recipe
 * @apiName PostRecipe
 * @apiGroup Recipe
 *
 * @apiParam {String} title Title of the Recipe.
 * @apiParam {String} description Description of the Recipe.
 * @apiParam {String} category_id Category ID of the Recipe.
 *
 * @apiParamExample Request-Example:
 *     {
 *       "title": "Title",
 *       "description": "Description",
 *       "category_id": "1"
 *     }
 *
 * @apiSuccess {String} _id ID of the Recipe.
 * @apiSuccess {String} title Title of the Recipe.
 * @apiSuccess {String} description Description of the Recipe.
 * @apiSuccess {Date} create Create of the Recipe.
 * @apiSuccess {Date} update Update of the Recipe.
 * @apiSuccess {String} category_id Category ID of the Recipe.
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
 * @api {delete} /recipe/:id Remove Recipe
 * @apiName DeleteRecipe
 * @apiGroup Recipe
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Success
 */
/**
 * @api {put} /recipe/:id Edit Recipe
 * @apiName EditRecipe
 * @apiGroup Recipe
 *
 * @apiParam {String} title Title of the Recipe.
 * @apiParam {String} description Description of the Recipe.
 * @apiParam {String} category_id Category ID of the Recipe.
 *
 * @apiParamExample Request-Example:
 *     {
 *       "title": "Title",
 *       "description": "Description",
 *       "category_id": "1"
 *     }
 *
 * @apiSuccess {String} _id ID of the Recipe.
 * @apiSuccess {String} title Title of the Recipe.
 * @apiSuccess {String} description Description of the Recipe.
 * @apiSuccess {Date} create Create of the Recipe.
 * @apiSuccess {Date} update Update of the Recipe.
 * @apiSuccess {String} category_id Category ID of the Recipe.
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

router
  .get('/recipe/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return ctrl.getOne(ctx.params.id);
  }))

  .get('/recipeList/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return await ctrl.getList(ctx.params.id);
  }))
  .post('/recipe', tryCatch(async (ctx) => {
    await validator.checkRecipe(ctx.request.body);
    return await ctrl.create(ctx.request.body);
  }))
  .put('/recipe/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    await validator.checkRecipe(ctx.request.body);
    return await ctrl.edit(ctx.params.id, ctx.request.body);
  }))
  .delete('/recipe/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return await ctrl.remove(ctx.params.id);
  }));

export default router;
