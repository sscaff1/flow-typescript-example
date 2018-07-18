function add(x: number, y: number): number {
	return x + y;
}

// add('str', 3); webpack throws an error with this argument

add(2, 3);

export default add;