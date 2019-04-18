# Browser-Text-and-Code-Editor
A lightweight text and code editor all in your browser with a save feature.

<img src='https://i.imgur.com/OsVAuN7.png'>

<img src='https://i.imgur.com/DdJzXNA.png'>


----Steps to initalize---

1.) After unzipping the downloaded folder, open your terminal 

2.) To go to this folder, type cd and drag this folder into the terminal and press enter

3.) If you do not have homebrew installed, follow the steps in this link:
    https://brew.sh/        
        
        -Windows: install scoop (and npm)- https://scoop.sh/
    
4.) Then run ' brew install yarn ' to build the static server for the app. (Windows: ' npm install yarn -g ')

5.) After installation, run  ' yarn build ' , followed by ' yarn global add serve ' (no quotations).
 
6.) The server is now ready to be launced whenever. To run this app, you will no longer need to perform steps 1-5. Run the following steps to deploy app on a needed basis.


----Steps to Run App----

7.) Open terminal and ' cd ' into the subfolder "TextEditor v0.6.5" (step 2 for more details).

8.) Run ' serve -s build ' (' npm install serve ' if necessary).

9.) A new tab will be opened with the app (Or paste address displayed in the terminal into your favorite browser).


# Features

Save your notes to local storage by choosing one of the buttons at the bottom of the notepad. The 'Save' feature allows you to save the current state of the notepad to your browser's Local Storage with the choice of naming your file. To retrieve this file, click the button 'Get' and choose a file listed.

This file will be saved until you decide to delete it, using the 'Delete' button. Choose a file name from the storage to delete.

To show the button menu, click on the notepad. Click again to hide.

The code editor button at the top allows you to switch to a code editor mode. The current editor functions only with javascript (supports syntax highlight and error messages).


# Bugs

The react state cannot be saved to Local Storage effectively. This is a priority for the next update and will be fixed via react state loading.


# v0.7 Update:

- Optimization of React Local State
- Fully functional Code editor with multiple language support
- More text-editor features (highlighting, numbered lists, etc.), as well as image  maintainance and editing
- Functional Javascript console
