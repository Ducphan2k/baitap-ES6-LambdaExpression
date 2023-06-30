const listAnimal = new Set(["Tiger", "Lion", "Panther", "Elephant", "Lion"]);
listAnimal.add("Panda");
listAnimal.has("Rabit");
listAnimal.delete("Tiger");

const newListAnimal = [...listAnimal];
console.log(listAnimal.has("Rabit"));
console.log(listAnimal);
console.log(newListAnimal);
