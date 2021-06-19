const Router = require("express");
const router = new Router();
const managerController = require("../controllers/managerController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/tariffadd", managerController.tariffadd);
router.post("/assignment", managerController.assignment);
router.post("/registration", managerController.registration);
router.get("/unprocessedpursh", managerController.unprocessedpursh);
router.post("/completepurchase", managerController.completepurchase);
router.get("/purchases", managerController.purchases);
router.get("/requisite", managerController.requisite);
router.get("/report");
router.get("/workers", managerController.workers);
router.get("/upcomingworks", managerController.upcomingworks);
router.post("/completeworks", managerController.completeworks);

module.exports = router;
