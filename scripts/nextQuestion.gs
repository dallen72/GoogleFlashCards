function nextQuestion() {

  // get question number on the test
  var spreadsheet = SpreadsheetApp.getActive();  
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Test'), true);
  spreadsheet.getRange('B2').activate();
  var next_question_num = spreadsheet.getCurrentCell().getValue() + 1
  
  // record the chosen answer on the progress tracker
  var current_question_index = next_question_num 
  var spreadsheet = SpreadsheetApp.getActive();  
  spreadsheet.getRange('F2').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Progress Tracker'), true);
  spreadsheet.getRange('C' + current_question_index).activate();
  spreadsheet.getRange('Test!F2').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  
  spreadsheet.getRange('F' + current_question_index).activate();
  var is_correct = spreadsheet.getCurrentCell().getValue();
  
  // get the length of the test
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Test'), true);
  spreadsheet.getRange('A2').activate();
  var test_length = spreadsheet.getCurrentCell().getValue() + 1
  
  incrementCorrect(is_correct)
  
  // end the test (if fin)
  if (next_question_num < test_length) {
    loadQuestion(next_question_num)
  } else {
    endTestAlert()
  }
}

function endTestAlert() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.alert(
     'End Test',
     "Test Finished! Look at your score on the left.",
      ui.ButtonSet.OK);
}
