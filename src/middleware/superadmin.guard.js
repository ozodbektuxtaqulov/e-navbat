import { catchError } from "../utils/error-response.js";

export const SuperAdminguard = (req, res, next) => {
  try {
    const user = req?.user;
    if (!user || user.role != "superadmin") {
      catchError(res, 403, "Forbidden user");
    }
    next();
  } catch (error) {
    catchError(res, 500, error.message);
  }
};
