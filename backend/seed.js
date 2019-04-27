const {User, Genre, Show, Comment} = require('./models');

const userData = [
  {username: 'Dima'},
  {username: 'Dan'},
  {username: 'John'},
  {username: 'Leo'},
  {username: 'Carlos123'}
];

const genreData=[
  {genre_name:'Action'},
  {genre_name:'Comedy'},
  {genre_name:'Fantasy'},
  {genre_name:'Drama'},
];
const showData=[
  {
    title: 'Game of Thrones',
    img_url: 'https://cnet3.cbsistatic.com/img/J6WsvoDsr_5GZUfX6uYkbgRnl4U=/2019/03/04/3055d4ad-ad09-4924-9132-eb790c0633af/jonsnowonthronegot.jpg',
    userId: 1,
    genreId: 3
  },
  {
    title: 'Rick and Morty',
    img_url: 'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg',
    userId: 1,
    genreId: 2
  },
  {
    title: 'The BlackList',
    img_url: 'https://m.media-amazon.com/images/M/MV5BYTZlMDg3NjUtNmRkYS00NDNmLTk1YTQtZDQ1ZjJiMmQ0N2Y5XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    userId: 2,
    genreId: 3
  },
  {
    title: 'Family Guy',
    img_url: 'https://www.citytv.com/wp-content/uploads/2018/09/family-guy-11-all-shows.jpg',
    userId: 4,
    genreId: 2
  },
  {
    title: 'House',
    img_url: 'https://zayzay.com/wp-content/uploads/2014/02/20296-house-md-h3.jpg',
    userId: 3,
    genreId: 4
  },
  {
    title: 'The Office',
    img_url: 'https://img.nbc.com/sites/nbcunbc/files/files/images/2016/1/19/MDot-TheOffice-640x360-MP.jpg',
    userId: 5,
    genreId: 2
  },
];

const commentData=[
      {
        comment_body: "Bran knows too much. ",
        userId: 1,
        showId: 1
      },
      {
        comment_body: 'So does anyone really hear Stewie talk?',
        userId: 3,
        showId: 4
      },
      {
        comment_body: 'Pickle Rick is the ultimate Rick!!!',
        userId: 2,
        showId: 2
      },
      {
        comment_body: 'Parkour',
        userId: 4,
        showId: 6
      }
    ];


const main = async () => {

  try {
    // Delete everything in the database.
    ///Need this to create table
    // User.sync({force: true }).then(() => { User.bulkCreate(userData);});
    // Genre.sync({force: true }).then(() => { Genre.bulkCreate(genreData);});
    // Show.sync({force: true }).then(() => { Show.bulkCreate(showData);});
    // Comment.sync({force: true }).then(() => { Comment.bulkCreate(commentData);});
    await User.bulkCreate(userData);
    await Genre.bulkCreate(genreData);
    await Show.bulkCreate(showData);
    await Comment.bulkCreate(commentData);
  } catch (e) {

    console.log(e);

  } finally {
    process.exit();
  }

}

main();
