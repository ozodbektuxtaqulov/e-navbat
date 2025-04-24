import { Router } from "express";
import { AdminController } from "../controllers/admin.controller.js";
import { jwtAuthGuard } from "../middleware/jwt-auth.guard.js";
import { SuperAdminguard } from "../middleware/superadmin.guard.js";
import { SelfGuard } from "../middleware/self-admin.guard.js";

const router = Router();
const controller = new AdminController();

router
  .post("./superadmin", controller.createSuperAdmin)
  .post("/", jwtAuthGuard, SuperAdminguard, controller.createAdmin)
  .post("/signin", controller.signInAdmin)
  .get("/", jwtAuthGuard, SuperAdminguard, controller.getAllAdmins)
  .get("/:id", jwtAuthGuard, SelfGuard, controller.getAdminById)
  .patch("/:id", jwtAuthGuard, SelfGuard, controller.updateAdminById)
  .delete("/:id", jwtAuthGuard, SuperAdminguard, controller.deleteAdminById);

export default router;
