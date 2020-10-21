# GoogleFlashCards

This was a tool to help me study for COMPTIA Security Plus. It can be used to study for any multiple choice test. The idea is you enter questions and answers to the questions to the Q&A sheet/tab, the questions are shuffled, the app presents one question at a time, then after you finish, the next time you take the test questions are shown to you which you have gotten wrong first.

Google sheets together with the scripting language Google sheets provides was used to build this simple app. Images of the app can be found in the "pics" folder. The code is in the "Scripts" folder. The "Test", "Q&A", and "Progress Tracker" tabs/sheets are part of the app, and the "Backup" and "grading tracker" tabs/sheets are manually modified. 

The only three buttons clicked are "Start/Reset", "next" and "Calc and Show Score".

When "Start/Reset" is clicked, the questions are shuffled randomly, then sorted according to a priority score for each question, then a new questions is loaded to the "Test" sheet.

Type in an answer and click "next" and the answer will be saved and compared to the correct answer. The priority score on the Q&A sheet will be updated based on whether the question was answered correctly. This question is also added to the progress tracker sheet. Then, the next question is loaded. 

