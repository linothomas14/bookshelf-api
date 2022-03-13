const {
  getAllBooksHandler,
  addNewBookHandler,
  getBookByIdHandler,
  updateBookHanlder,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addNewBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHanlder,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
