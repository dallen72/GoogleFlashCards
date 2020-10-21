function showScore() {
  var ui = SpreadsheetApp.getUi();

  var spreadsheet = SpreadsheetApp.getActive();  
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Progress Tracker'), true);
  spreadsheet.getRange('J2').activate();
  var test_score = spreadsheet.getCurrentCell().getValue()  
    
  var result = ui.alert(
     'SCORE!',
     test_score + " percent !",
      ui.ButtonSet.OK);
}
