const router = require("express").Router();
const userRoutes = require("./userRoute");
const postsRoutes = require("./postRoute");
const commentsRoutes = require("./commentRoute");

router.use("/users", userRoutes);
router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;
//finished
