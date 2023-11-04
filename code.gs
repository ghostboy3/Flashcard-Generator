function onOpen() {
  DocumentApp.getUi().createAddonMenu()
    .addItem('Show Flashcards', 'showFlashcards')
    .addToUi();
}

function showFlashcards() {
  var ui = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('Flashcard Generator');
  DocumentApp.getUi().showSidebar(ui);
}

function getFlashcards() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.getText();
  return text;
}
function openModal(dataArray) {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('modal')
  var scriptTag = '<script>var data = ' + JSON.stringify(dataArray) + ';</script>';
  var modalHtml = htmlOutput.getContent();
  modalHtml = scriptTag + modalHtml;
  htmlOutput.setContent(modalHtml);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'Flashcards');
}

