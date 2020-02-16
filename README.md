# Akan Name
#### Akan name website, 14/02/2020
#### By [E Naika](https://github.com/ENAIKA)
## Description
* This is a website showing Akan names on input of birthday.
* Akan names are derived from Ghanaian culture. Frequently children in Ghana,  are given their first name as a day-name which is depended on gender and corresponds to the day in the week they were born. 
## Setup/Installation Requirements
* To run the website need a browser (for IE browsers version 9 and above is recommended.)
#### To Contribute
Follow this steps:
* Fork the repo
* Create your branch 
* Make the appropriate changes in the files
* Add changes to reflect the changes made 
* Commit your changes 
* Push to the branch 
* Create a Pull Request.

# Behaviour Driven Design
* Akan calculator should output Akan names based on user birthday and gender inputs.
### Specifications
| Behaviour                | Input example           | Output Example                   |
| ---------------------------|:-----------------------:| --------------------------------:|
| An empty form              | No input and user hits submit| false/alert the form be filled|
| Not all fields filled      | Some fields not filled | false/alert the form be filled   | 
| Leap year-dully filled form| month is Feb & date = 29| True/Output Akan name            |
| Unchecked radio button | failed to check either of the radio buttons| false/alert the form be fully filled|
|Not leap year-dully filled form| month is Feb & date = 28| True/Output Akan name|
|Not leap year-dully filled form| any month except Feb and day=30| True/Output Akan name|
|Not leap year-dully filled form| month is 2,4,6,9,11 & date >31| false/alert invalid input|

* create user interface.
* Integrate the frontend and backend by linking the stylesheet and javascipt files to html file
## Technologies Used
* HTML for page layouts
* Bootstrap and Custom-made CSS for styling.
* JS calculating the weekday and output the Akan name.

# URL
* https://enaika.github.io/AKAN/

### License
* MIT License

* Copyright © [E NAIKA](https://github.com/ENAIKA)[2020]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

