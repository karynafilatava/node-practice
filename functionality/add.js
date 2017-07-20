//returns true if title is unique
var verify = function(title, todoList) {
	return todoList.filter(function (todo) {
		return todo.title.toLowerCase() === title.toLowerCase();
	}).length < 1;
}

var add = function(todoList, title, body) {
	
	//pushes record if title is unique, otherwise - throw error
	if (verify(title, todoList)) {
		todoList.push(
			{
				"title" : title,
		 		"body" : body
			}
		);
	} else {
		throw new Error('\nThe record is already there.');
	}
};

module.exports = add;