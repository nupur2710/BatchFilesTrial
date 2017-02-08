echo on
set arg1=%1
set arg2=%2

rem copy the entire base folder
xcopy /s new-tei %1

rename %~f1\js\views\new-tei.js %1.js
rename %~f1\js\models\new-tei.js %1.js
rename %~f1\new-tei.styl %1.styl

rem replace the default name with the specific tei names

cscript replaceText.vbs %~f1\js\models\%1.js "NewTei" %2

cscript replaceText.vbs %~f1\js\views\%1.js "NewTei" %2
cscript replaceText.vbs %~f1\js\views\%1.js "new-tei" %1

cscript replaceText.vbs %~f1\js\views\tabs\create-question.js "NewTei" %2
cscript replaceText.vbs %~f1\js\views\accessibility.js "new-tei" %1
cscript replaceText.vbs %~f1\js\main.js "new-tei" %1
cscript replaceText.vbs %~f1\style\%1.styl "new-tei" %1
