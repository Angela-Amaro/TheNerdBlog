const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  const comment = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDataBase();

// const seedPosts = require("./post-seed");
// const seedUsers = require("./user-seed");
// const seedComments = require("./comment-seed");

// const sequelize = require("../config/connection");

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log("\n----- DATABASE SYNCED -----\n");

//   await seedUsers();
//   console.log("\n----- USERS SEEDED -----\n");

//   await seedPosts();
//   console.log("\n----- POSTS SEEDED -----\n");

//   await seedComments();
//   console.log("\n----- COMMENTS SEEDED -----\n");

//   process.exit(0);
// };

// seedAll();
