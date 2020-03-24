import Router from 'koa-router';
import ctrl from "../controller/breadcrumbs";
import tryCatch from "../component/wrapper";
import validator from "../validator/breadcrambs";

const router = new Router();

router
  .get('/breadcrumbs/category/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return await ctrl.getCategoryList(ctx.params.id);
  }))
  .get('/breadcrumbs/recipe/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return await ctrl.getRecipeList(ctx.params.id);
  }))
  .get('/breadcrumbs/article/:id', tryCatch(async (ctx) => {
    await validator.checkId(ctx.params.id);
    return await ctrl.getArticleList(ctx.params.id);
  }));

export default router;
