const Article = require('./article');
const User = require('./user');


User.hasMany(Article);
Article.belongsTo(User);

module.exports = { Article, User }
