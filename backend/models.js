const Sequelize= require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize({
  storage: './showroom.db',
  dialect: 'sqlite',
});

//check to make sure connection works
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Schema for tables
  const User = sequelize.define('user', {
    username: {
    type: Sequelize.STRING,
    unique: true
  },
});

const Genre = sequelize.define('genre', {
  genre_name: {
  type: Sequelize.STRING,
  unique: true
},
});

const Show = sequelize.define('show', {
  title: Sequelize.STRING,
  img_url: Sequelize.STRING,
});

const Comment = sequelize.define('comment', {
  comment_body: Sequelize.STRING,
});

Genre.hasMany(Show);
Show.belongsTo(Genre);

User.hasMany(Show);
Show.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Show.hasMany(Comment);
Comment.belongsTo(Show);

// First when running, comment in, 2nd time when running comment out and then run seed.js
// User.sync({force: true }).then(() => {});
// Genre.sync({force: true }).then(() => {});
// Show.sync({force: true }).then(() => {});
// Comment.sync({force: true }).then(() => {});



module.exports={
  sequelize,
  User,
  Genre,
  Show,
  Comment

}
