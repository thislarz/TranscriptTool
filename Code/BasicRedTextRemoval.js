function searchAndReplace() {
  var body = DocumentApp.getActiveDocument().getBody();
  body.appendParagraph('End of Ducument');

  var paragraphs = body.getParagraphs();
  for (var i = 0; i<paragraphs.length; i++) {
    
    var color0 = paragraphs[i].editAsText().getBackgroundColor()
    Logger.log(color0);
    if(color0 == '#ff0000') {
      body.removeChild(paragraphs[i]);
    }
  }
}