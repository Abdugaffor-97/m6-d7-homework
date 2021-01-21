# m6-d7-homework

- Create Articles, Categories, Authors, table and CRUD routes

- Create Route for each of them

- Use our custom ORM or your own SQL queries

- [EXTRA] Create table and Route for reviews

- [EXTRA] Feel free to add more functionality to orm.

# M6-D8 HOMEWORK

- Get articles with author and category by joining tables
  {
  SELECT \* FROM articles AS ar
  INNER JOIN authors as au ON ar.author_id=au.id
  INNER JOIN categories as cat ON ar.category_id = cat.id;
  }
- Search articles with title or content
- Count categories group by them id
- Sum total claps , reviews for an article




# M6-D9 HOMEWORK

## Medium in Sequelize

- Create Article, Author, Review, Category Model.
- Implement associations between the models.
- Implement CRUDS for articles, reviews, authors and categories
- In GET /articles endpoint articles should include categories, author and reviews ( reviews should include author who posted a review)
- Implement filters, pagination, search on article

[EXTRA] Count number of articles under each category
