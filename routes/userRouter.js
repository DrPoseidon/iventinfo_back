const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", userController.login);
router.get("/auth", userController.check);
router.get("/orders", userController.orders);
router.get("/tariffs", userController.tariffs);
router.get("/clients", userController.clients);
router.get("/quests", userController.quests);
module.exports = router;
