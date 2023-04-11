const router = require("koa-router")();

const ENV = process.env.NODE_ENV;

router.get("/", async (ctx, next) => {
  ctx.body = {
    title: "Hello Koa 2!, ENV:" + ENV,
  };
});

module.exports = router;
