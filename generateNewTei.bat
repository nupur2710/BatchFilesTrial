echo on
set arg1=%1
set arg2=%2

rem creates the folders with tei name passed in args
md %1
md %~f1\js
md %~f1\style
md %~f1\js\views
md %~f1\js\models
md %~f1\js\templates
md %~f1\js\views\tabs

rem creates the files with tei name passed in args
echo. 2>%~f1\js\models\%1.js
echo. 2>%~f1\js\views\%1.js

echo. 2>%~f1\js\views\accessibility.js
echo. 2>%~f1\js\views\tabs\create-question.js
echo. 2>%~f1\js\views\tabs\score-feedback.js

echo. 2>%~f1\style\%1.styl


rem copy files from all folders
xcopy /s/y new-tei\js\models\new-tei.js %~f1\js\models\%1.js
xcopy /s/y new-tei\js\views\new-tei.js %~f1\js\views\%1.js

xcopy /s/y new-tei\js\views\tabs\create-question.js %~f1\js\views\tabs\create-question.js
xcopy /s/y new-tei\js\views\accessibility.js %~f1\js\views\accessibility.js

rem replace the default name with the specific tei names

cscript replaceText.vbs %~f1\js\models\%1.js "NewTei" %2

cscript replaceText.vbs %~f1\js\views\%1.js "NewTei" %2
cscript replaceText.vbs %~f1\js\views\%1.js "new-tei" %1

cscript replaceText.vbs %~f1\js\views\tabs\create-question.js "NewTei" %2
cscript replaceText.vbs %~f1\js\views\accessibility.js "new-tei" %1
cscript replaceText.vbs %~f1\js\main.js "new-tei" %1

