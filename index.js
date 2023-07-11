console.log('h3')


 // DATA STRUCTURES
 // 1. Arrays   
    //sequential data strructure2
 // 2. object
 // 3. map
 // 4. set

 //Array
 let data = [true,34,"Hello Man",867,900];

 console.log(data);
 console.log(data[2]);
 console.log(data.length);//total elements in the array

 //change the value at an index in the array
data[3] = new Date();
data.splice(1,1,"God is good")
console.log(data)

//Adding more items to an array
// push(), //unShift(),

data.push('I pushed this item', 'audi', 'more items', 'checking the limit', new Date().getFullYear()); //this is addimg elements at the end of an array

data.unshift('Adds items at the begining')//Adds items at the begining of the array

let newData = [68,70,78,75,32,56,12,456,556,65565,908];
//adding the newData array into the data array above

data.unshift(newData);
console.log(data)
data.unshift(...newData);
data.push(...newData);

//delete an array
//data = null;

//removing elements from the array
let removedItem = data.pop(); //removes the last element in the array

let removedItem2 = data.shift();//removes the last element in the array
  console.log(`the popped item was : ${removedItem} and shiftedItems: ${removedItem2}`);


console.log(removedItem)
console.log(data);

//filtering out unique members of an array
let filterData = data.filter((item)=> typeof item == 'number');

console.log(filterData)


console.log(data.toString());



//finding the index of a given item  in an array

let idx = data.indexOf(65565);

console.log(`the index of (i65565) in the array is ${idx}`)

//checking if an item exists in the give array


let exist = data.includes(223442);//returns boolean values as answer

console.log(exist)

console.log(data);


//creating the copy of the array

let data2 = [...filterData] || filterData.slice();
 

//reversing the order of array


data2.reverse()
console.log(data2)

//sorting an array
data2.sort((a,b)=> a - b);
console.log(data2)

data2.sort((a,b)=> b - a);
console.log(data2)

//using the map method of the array
let resultArr = []; //array
data2.forEach((item) => {
   let roi = Number (item * (4.5/100).toFixed(3));
   resultArr.push(roi);
});


console.log(resultArr)

//using the map method

let roi_res = data2.map((item) => item * (4.5/100) );
 
console.log(roi_res);

//using slice ==> creating sub arrays out of an existing array

let data3 = data2.slice(0,5);
console.log(data3)

let data4 = data2.slice(-4);
console.log(data4)


//join 


let data5 = data2.join('-');
console.log(data5)



//using found

let found = data2.find((item) => 7);
console.log(found)

let ar = [
   [3,4,6,7,82,32,"hello"],
   65,true,
   [6784,677,888,1323,"world"]
]

let singleAr = ar.flat(2)
console.log(singleAr)

//comparing two arrays

let one = [1,2,3];
let two = [1,2,3];

console.log(one.join('').toString() == two.join('').toString())

//objects

