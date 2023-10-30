# booksApp

Book Management RESTful APIs
This Node.js application provides a set of RESTful APIs for managing books, including Create, Read, Update, and Delete (CRUD) operations. It is designed to work with a MongoDB database to store and retrieve book information.

Features

1. Create, read, update, and delete books in the database.
2. Get a list of all books or a single book by ID.

Prerequisites

1. Node.js and npm installed
2. MongoDB database accessible and configured (You can use a local MongoDB server or a cloud-based solution like MongoDB Atlas)
3. Create a .env file in the root directory of your app and add required values (can refer env.example file)

Installation

1. Clone the repository:
2. Install the project dependencies:
   npm i or npm install
3. configure .env file
4. start the application by running following command:
   npm start

API Endpoints
Here are the available API endpoints for managing books:

GET /api/books: Get a list of all books.
cUrl :
curl --location 'localhost:3000/books'

GET /api/books/:id: Get a book by ID.
cUrl :
curl --location 'localhost:3000/books/653f7d6c0f4890f74154af50'

POST /api/books: Create a new book.
cUrl :
curl --location 'localhost:3000/books' \
 --header 'Content-Type: application/json' \
 --data '{
"title": "Dracula",
"author": "Bram Stoker",
"published": "1897-05-26",
"genre": "horror",
"summary": "Dracula is a gothic horror novel written by Bram Stoker and first published in 1897. The novel is written in epistolary form and tells the story of Count Dracula'\''s attempt to move from Transylvania to England so that he may find new blood and spread the undead curse."
}'

PATCH /api/books/:id: Update a book by ID.
cUrl :
curl --location --request PATCH 'localhost:3000/books/653f7d6c0f4890f74154af50' \
 --header 'Content-Type: application/json' \
 --data '{
"title":"updating title"
}'

DELETE /api/books/:id: Delete a book by ID.
cUrl :
curl --location --request DELETE 'localhost:3000/books/653f7d6c0f4890f74154af50'
