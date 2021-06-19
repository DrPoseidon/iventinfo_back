const Router = require("express");
const router = new Router();
const operatorController = require("../controllers/operatorController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/clientadd", operatorController.clientadd);
router.post("/orderadd", operatorController.orderadd);
router.get("/calculation");

module.exports = router;
