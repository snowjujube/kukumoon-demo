module.exports = (app) => {
  const { router, controller } = app;
  router.get('/components', controller.component.getAllComponents);
};
