// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT_BOOKS = '/books';

export const PATH = {
  root: ROOT_BOOKS,
  books: {
    root: path(ROOT_BOOKS, '/'),
    list: path(ROOT_BOOKS, '/list'),
  },
};
