export const booksByTypeOrGender = ({ authors, gender = '', type = '', sortByName = false }) => {
  let authorsList = authors;
  if (gender) {
    authorsList = authorsList.filter((author) => author?.gender?.toLowerCase() === gender?.toLowerCase());
  }

  let books = authorsList?.reduce((books, author) => [...books, ...(author?.books?.length ? author?.books : [])], []);

  if (type) {
    books = books.filter((author) => author?.type?.toLowerCase() === type?.toLowerCase());
  }

  if (sortByName) {
    books = books?.sort((a, b) => a?.name.localeCompare(b?.name));
  }

  return books;
};
