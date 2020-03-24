export default function wrap(middleware) {
  return async (ctx, next) => {
    try {
      ctx.body = await middleware(ctx, next);
      ctx.status = 200;
    } catch (err) {

      ctx.status = err.status || 400;
      ctx.body = err;
    }
  };
}
