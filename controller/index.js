const router = require("express").Router();
const userRoutes = require("./userRoute");
const postsRoutes = require("./postRoute");
const commentRoutes = require("./commentRoute");

router.use("/users", userRoutes);
router.use("/posts", postsRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
//finished
