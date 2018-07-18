// @flow
// Note by default vscode will complain about this because it only wants types in a .ts file - Microsoft 🙄
function add(x: number, y: number): number {
	return x + y;
}

//add('str', 3); //webpack DOES NOT throws an error with this argument

add(2, 3);

export default add;