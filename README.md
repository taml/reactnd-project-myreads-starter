# MyReads Project

This project is part of the Udacity React Nanodegree and utilises a provided backend/API to display and search for books. 
The main page of the project displays a small library of books categorised by the following sections: Want To Read, Currently Reading and Read. 

A search page is also included as part of the project which makes it possible to search for books. The books on the search page provided can be added into the main page categories. If a book is already in a main page category and appears on the search page it reflects the category it is within. 

Search results are updated as input is provided to the search field and search results are cleared when the unput is empty. 

React Router is used to create routes to seperate the two pages. 

## Running the Project

To start the project use:

* `npm install` to install project dependencies
* Then start the web server with `npm start`

## Backend Server

This project utilises a backend server provided by Udacity. [`BooksAPI.js`](src/BooksAPI.js) contains methods which perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Search Terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

