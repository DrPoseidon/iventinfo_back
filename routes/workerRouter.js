const Router = require("express");
const router = new Router();
const workerController = require("../controllers/workerController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/requisiteadd", workerController.requisiteadd);
router.post("/purchasecreate", workerController.purchasecreate);
router.post("/requisite", workerController.requisite);
router.post("/completeorder", workerController.completeorder);
router.post("/upcomingworks", workerController.upcomingworks);
router.get("/purchases", workerController.purchases);

module.exports = router;
