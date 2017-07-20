var program = require('commander'),
    fs = require('fs'),
    add = require('./functionality/add'),
    show = require('./functionality/show'),
    remove = require('./functionality/remove'),
    todoList = require('./todos.json');

//stringify changed data and writes/rewrites to a todos.json 
var saveChanges = function() {
  fs.writeFile('todos.json', JSON.stringify(todoList, null, 2), (err) => {
    if (err) throw err;
  });
};

//adds 'add <title> <body>' command to the programm commands 
program
  .command('add <title> <body>')
  .description('add one record with given unique title and body to the to-do list')
  .action(function (title, body) {

    // adds record with given title and body to the json array, 
    //    rewrites file with changed content, 
    //    logs message about success operation 
    //    OR logs error if record with given title already exists
    try {
      add(todoList, title, body);
      saveChanges();
      console.log('the record was successfully added');
    } catch (e) {
      console.log(e.message);
    }
  });

//adds 'list' command to the programm commands 
program
  .command('list')
  .description('list all records in the to-do list')
  .action(function () {

    // shows all records from json file
    //    OR logs error if file is empty
    try {
      show(todoList);
    } catch (e) {
      console.log(e.message);
    }
  });

//adds 'read <title>' command to the programm commands 
program
  .command('read <title>')
  .description('read the record with given title')
  .action(function (title) {

    // shows record with given title from json file
    //    OR logs error if file is empty or there's no such record
    try {
      show(todoList, title);
    } catch (e) {
      console.log(e.message);
    }
  });

//adds 'remove <title>' command to the programm commands 
program
  .command('remove <title>')
  .description('remove the record with given title')
  .action(function (title) {

    // removes record with given title from the json file, 
    //    rewrites file with changed content, 
    //    logs message about success operation 
    //    OR logs error if there's no such record 
    try {
      remove(todoList, title);
      saveChanges();
      console.log('the record was successfully removed');
    } catch (e) {
      console.log(e.message);
    }
  });


program
  //features to beautify help command
  .description('A simple to-do application')
  .usage('command [arguments...]')
  //commands app to parse arguments given in command line
  .parse(process.argv);

