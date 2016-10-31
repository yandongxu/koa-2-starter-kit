const Router = require('koa-router');
const { home, about } = require('../controllers/pages');

const router = new Router();

// home page
router.get('home', '/', home);
// about page
router.get('about', '/about', about);

module.exports = router;
