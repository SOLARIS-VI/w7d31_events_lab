document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  const readingList = document.querySelector('#reading-list');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const categoryInput = document.querySelector('#category');

    const title = titleInput.value;
    const author = authorInput.value;
    const category = categoryInput.value;

    if (title && author && category) {
      const listItem = createReadingListItem(title, author, category);
      readingList.appendChild(listItem);

      form.reset();
    }
  };

  const createReadingListItem = (title, author, category) => {
    const listItem = document.createElement('li');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${author}`;

    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Category: ${category}`;

    listItem.appendChild(titleElement);
    listItem.appendChild(authorElement);
    listItem.appendChild(categoryElement);

    return listItem;
  };

  form.addEventListener('submit', handleFormSubmit);
});
