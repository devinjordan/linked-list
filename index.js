import LinkedList from "./linkedList.js";

const myList = new LinkedList;
myList.append(1);
myList.append(7);
myList.append(7);
myList.append(6);

console.log(`Head: ${myList.head()}`);
console.log(`Tail: ${myList.tail()}`);
console.log(`Index 5: ${myList.at(5)}`); // nothing
console.log(`Index 3: ${myList.at(3).value}`); // 6

console.log(myList.toString()); // ( 1 ) -> ( 7 ) -> ( 7 ) -> ( 6 )
console.log(myList.contains(6)); // True
console.log(myList.contains(8)); // False
console.log(myList.find(6)); // 3
console.log(myList.find(8)); // null
myList.pop();
console.log(myList.toString()); // ( 1 ) -> ( 7 ) -> ( 7 ) 
