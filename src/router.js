const router = require("koa-router")();

const ENV = process.env.NODE_ENV;

router.get("/api/test", async (ctx, next) => {
  ctx.body = {
    title: "koa2 test ok, ENV:" + ENV,
  };
});

module.exports = router;
