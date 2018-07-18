// note typescript knows that I have a reference to a function add somewhere else
function add(x, y) {
	return x + y;
}

add('str', 3);

add(2, 3);

export default add;