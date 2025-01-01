/**
 * Parse Google Docs files to retrieve their edit link and redirect to it
 */
const GDOC_EXTENSIONS = [
  ".gdoc",
  ".gddoc",
  ".gform",
  ".gsheet",
  ".gdsheets",
  ".gslides",
  ".gdslides",
];

$(document).on("click", ".files-list__row-name", (event) => {
  const fileLink = $(event.currentTarget).find("a");
  const fileExt = fileLink.find(".files-list__row-name-ext").text();

  if (!GDOC_EXTENSIONS.includes(fileExt) || !fileLink.attr("href")) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  /** @param doc {{doc_id: string | undefined }} */
  fetch(fileLink.attr("href"))
    .then((resp) => resp.json())
    .then((doc) => {
      if (doc.doc_id) {
        const url = docUrl(doc.doc_id, fileExt);
        if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          // Unexpected
          console.warn(
            `Failed to construct Google Docs URL for "${fileExt}" extension`,
          );
        }
      }
    })
    .catch(console.error);
});

/**
 * @param docId string
 * @param fileExt string
 */
function docUrl(docId, fileExt) {
  switch (fileExt) {
    case ".gdoc":
    case ".gddoc":
      return `https://docs.google.com/document/d/${docId}`;
    case ".gform":
      return `https://docs.google.com/forms/d/${docId}`;
    case ".gsheet":
    case ".gdsheets":
      return `https://docs.google.com/spreadsheets/d/${docId}`;
    case ".gslides":
    case ".gdslides":
      return `https://docs.google.com/document/d/${docId}`;
  }
}
