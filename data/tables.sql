CREATE TABLE IF NOT EXISTS
  authors (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(64) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    email VARCHAR(128) NOT NULL

  );



CREATE TABLE IF NOT EXISTS 
  categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

    category_name VARCHAR(64) NOT NULL
  );



CREATE TABLE IF NOT EXISTS
  articles (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

    headline VARCHAR(256) NOT NULL,

    sub_header VARCHAR(512),

    content VARCHAR(256) NOT NULL,

    cover TEXT,

    author_id INTEGER NOT NULL,

    category_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES authors,

    FOREIGN KEY (category_id) REFERENCES categories

  );



CREATE TABLE IF NOT EXISTS
  reaction (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

    text text,

    clapped BOOLEAN,

    author_id INTEGER NOT NULL,

    article_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES authors,

    FOREIGN KEY (article_id) REFERENCES articles

  );