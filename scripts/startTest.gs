function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Dialog')
      .addItem('Open', 'openDialog')
      .addToUi();
}

TOTAL_NUM_QUESTIONS = 354

function startTest() {
  resetProgressTracker()
  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Test'), true);
  spreadsheet.getRange('A2').activate();
  var total_num_questions =   spreadsheet.getCurrentCell().getValue()
      
  shuffleQuestions(TOTAL_NUM_QUESTIONS)  

  // sort questions
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Q&A'), true);
  spreadsheet.getRange('K2:K' + (total_num_questions + 1)).activate()
  spreadsheet.getActiveSheet().sort(11, true);
  
  loadQuestion(1)
}

// increment if correctly answered, on the Q&A sheet
function incrementCorrect(is_correct) {
  // prioritize for getting wrong
  if (is_correct == 0) {
    is_correct = -1
  }
  
  // get question number on the test
  var spreadsheet = SpreadsheetApp.getActive();  
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Test'), true);
  spreadsheet.getRange('B2').activate();
  var question_num = spreadsheet.getCurrentCell().getValue() + 1
  
  // increment on Q&A sheet
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Q&A'), true);
  spreadsheet.getRange('K' + question_num).activate();
  var num_correct = spreadsheet.getCurrentCell().getValue() + is_correct
  
  spreadsheet.getCurrentCell().setValue(num_correct);
}

function resetProgressTracker() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Progress Tracker');
  sheet.getRange('A2:E1000').clearContent();
}

function loadQuestion(question_num) {
  var question_index = question_num + 1
  // TODO: put var where necessary
  
  // set new question number on the test
  var spreadsheet = SpreadsheetApp.getActive();  
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Test'), true);
  spreadsheet.getRange('B2').activate();
  spreadsheet.getCurrentCell().setValue(question_num)
 
  // set the answer in progress tracker
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Progress Tracker'), true);
  spreadsheet.getRange('E' + question_index).activate();
  spreadsheet.getRange('\'Q&A\'!J' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  
  // set the question in progress tracker
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Progress Tracker'), true);
  spreadsheet.getRange('A' + question_index).activate();
  spreadsheet.getRange('\'Q&A\'!A' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  
  // copy the question over to test
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Test'), true);
  spreadsheet.getRange('C2:C12').activate();
  spreadsheet.getRange('\'Q&A\'!B' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Q&A'), true); // TODO: delete this?
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Test'), true);
  spreadsheet.getRange('E2').activate();
  spreadsheet.getRange('\'Q&A\'!C' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.getRange('E3').activate();
  spreadsheet.getRange('\'Q&A\'!D' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.getRange('E4').activate();
  spreadsheet.getRange('\'Q&A\'!E' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.getRange('E5').activate();
  spreadsheet.getRange('\'Q&A\'!F' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.getRange('E6').activate();
  spreadsheet.getRange('\'Q&A\'!G' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.getRange('E7').activate();
  spreadsheet.getRange('\'Q&A\'!H' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  spreadsheet.getRange('E8').activate();
  spreadsheet.getRange('\'Q&A\'!I' + question_index).copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
}

function shuffleQuestions(total_num_questions) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Q&A'), true);
  
  for (var y = 0; y < total_num_questions; y++) {
    rand_num = Math.floor(Math.random() * total_num_questions)
    index_to_copy = rand_num + 2  // offset for top row
    last_question_index = total_num_questions + 2 // offset to append new last question
  
    // adds after last question
    spreadsheet.getRange(last_question_index + ':' + last_question_index).activate();
    // moves question to make it the new last question
    spreadsheet.getRange(index_to_copy + ':' + index_to_copy).moveTo(spreadsheet.getActiveRange());
    // activates and deletes the now empty question row
    spreadsheet.getRange(index_to_copy + ':' + index_to_copy).activate();
    spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  }
};
