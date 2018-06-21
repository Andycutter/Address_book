# README Andy's Address Book [es2015] 21. June 2018

### Static website with local storage of contacts and contact information

### List of content
1. Instruction
2. Creating Andy's address book
3. List of files
4. Changelog
5. Notes


### 1. Instruction
Go to the web-address 'https://andycutter.github.io/Address_book/'
In each text field fill in the corresponding information:
`Add name` - fill in with the name of your choosing (e.g. Andy Test)
`Add email` - fill in with email (e.g. person@test.org)
`Add phone number` - fill in with phone number (e.g. 004511223344)
`Add company` - fill in with the name of the persons company (e.g. CraftAcademy)
`Add twitter` - fill in if person has a twitter account (e.g. AndysTestTweet)
`Any notes?` - fill in with any additional information that does not belong in the other fields
 
 Note that any input in the fields can me omitted.

 Press the `Save contact` button and the information that was parsed in using the fields will
 be saved locally as a contact.
 The contacts are displayed beneath the input fields and `Save contact` button.
 Each contact will be accompanied by a small image of a beautiful young pine forest with a 
 small dirt path going through it.

 ### 2. Creating Andy's address book
 This Andy's Address Book is brought to you with HTML and JavaScript and using Tailwind CSS (https://tailwindcss.com) for styling.
 The acceptance tests has been done with Cucumber and yarn as package manager.
 The style of testing is behavior-driven developenment where code is being implementet step
 by step until all tests pass.
 Webpack is used the bundle the JavaScript files we use into a single file JS-file.
 The JavaScript is made with ES6 standards, so babeljs has been used to transpile our code.

 ### 3. List of files
 This application consist of the following files:
 * **index.html**
 * **app.js**
 * **bundle.js**
 * **README.md**

 **index.html**
 Contains the framework og the user interface and the CSS elements of the webpage.
 **app.js** 
 Contains the JavaScript that adds functionality to the webpage. This code will be transfered to
 the bundle.js file which the index.html file will draw upon. 
 **bundle.js**
 Contains the code from app.js in a single line compacted format. Good for performance and 
 computers but difficult for programmers to read and understand.
 **README.md**
 Contains this document.

 ### 4. Changelog

 Version 1.0 20182106
 - First release version

 ### 5. Notes
 Nothing noteworthy noted