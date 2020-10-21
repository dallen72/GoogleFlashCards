

function dsaf() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('K2:K59').activate()
  .sort({column: 11, ascending: true});
};

function sort() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('K:K').activate();
  spreadsheet.getActiveSheet().sort(11, true);
};

function sort1() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('K2:K41').activate()
  .sort({column: 11, ascending: true});
};
