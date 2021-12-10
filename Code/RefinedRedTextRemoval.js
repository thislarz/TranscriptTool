function searchAndReplace() {
    //gets documents body to work with
    var body = DocumentApp.getActiveDocument().getBody();
    
    //gets Paragraphs / Lists / tables
    var paragraphs = body.getParagraphs();
    var listItems = body.getListItems();
    var tables = body.getTables();

    var removableColors = ["#ff0000","#ffff00"]

    //break everything down to text and have a general method that removes red stuff
    //paragraphs[x].editAsText().getBackgroundColor(0) returns the color of the first character
    
    //looping through paragraphs and cheching everything as text
    for(var i = 0; i<paragraphs.length;i++) {
      removeColorFromText(paragraphs[i].editAsText(),removableColors);
    }
    //cleaning up list fragments that are still colored
    for(var i = 0; i<listItems.length;i++) {
      var bg = listItems[i].editAsText().getBackgroundColor();
      for(var si = 0; si<removableColors.length;si++) {
      if(bg==removableColors[si]) {
        listItems[i].removeFromParent();
      }
    }
    }
  }

//removes all chars with a given BG from the text
function removeColorFromText(text, colorList) {
  //Logger.log("removeColorFromText() called")
  var length = text.getText().length

  //loop through text looks at ever char and test backgroundcolor -> delets char if color matched
  for(var i = 0; i<length;i++) {

    //test if the backgroundcolor matches any of the listed
    var bg = text.getBackgroundColor(i)
    for(var si = 0; si<colorList.length;si++) {
      if(bg==colorList[si]) {
        text.deleteText(i,i);
        //reducing i and length since a char was removed
        i--;
        length--;
      }
    }
  }
}