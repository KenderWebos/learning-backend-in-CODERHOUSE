import { Router } from "express";

const router = Router();
const users = [];

router.get("/", (req, res, next) => {
  res.send({ users });
});

router.post("/", (req, res, next) => {
  try {
    const user = req.body;
    users.push(user);
    res.send({ status: "success" });
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  if (error) {
    res.send({ status: "error", message: error.message });
  }
  next();
});

export default router;
