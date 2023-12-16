// noinspection SpellCheckingInspection
/**
 * Parse Google Docs files to retrieve their edit link and redirect to it
 */
const GOOGLE_DOCS_EXTENSIONS = [
  '.gddoc',
  '.gdlink',
  '.gdsheets',
  '.gdslides',
  '.gdoc',
  '.glink',
  '.gform',
  '.gsheet',
  '.gslides',
];

$('.files-list__row-name').on('click', (event) => {
  const fileLink = $(event.currentTarget).find('a');
  const extension = fileLink.find('.files-list__row-name-ext').text();

  if (!GOOGLE_DOCS_EXTENSIONS.includes(extension) || !fileLink.attr('href')) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  fetch(fileLink.attr('href'))
    .then((response) => response.json())
    .then((doc) => {
      if (doc.url) {
        window.open(doc.url, '_blank', 'noopener,noreferrer');
      }
    })
    .catch(console.error);
});
