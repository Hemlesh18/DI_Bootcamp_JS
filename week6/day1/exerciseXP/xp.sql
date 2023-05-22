-- CREATE TABLE items (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(100) NOT NULL,
-- 	price INTEGER NOT NULL
-- 	)
-- CREATE TABLE customers(
-- 	id SERIAL PRIMARY KEY ,
-- 	FirstName VARCHAR(100),
-- 	LastName VARCHAR(100)
-- )

-- INSERT INTO items (name, price)VALUES ('Small Desk', 100),('large desk',300),('fan',80);
-- INSERT INTO customers (FirstName, LastName)VALUES ('Greg', 'Jones'),('Sandra', 'Jones'),('Scott', 'Scott'),('Trevor', 'Green'),('Melanie', 'Johnson');
-- SELECT * FROM customers;
-- SELECT * FROM items;

-- SELECT * FROM items WHERE price > 80;
-- SELECT * FROM items WHERE price <= 300;

-- SELECT * FROM customers WHERE LastName= 'Smith'; empty table
-- SELECT * FROM customers WHERE LastName= 'Jones';
-- SELECT * FROM customers WHERE LastName!= 'Scott';