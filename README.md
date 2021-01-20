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
