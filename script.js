//1. Write a JavaScript program to sort the items of an array.
console.log("1. Write a JavaScript program to sort the items of an array.")
var arr = [5, 2, 8, 1, 3];
var sortedArr = arr.slice().sort((a, b) => a - b);
console.log("Unsorted Array:",arr);
console.log("Sorted Array:", sortedArr);

//2.Add an element to an array front and back without push and unshift
console.log("2.Add an element to an array front and back without push and unshift")
var a=[1,2,4,5];
var frontElement=9;
var backElement=1;

var addFront=[frontElement].concat(a);
console.log(addFront);
var addBack=a.concat(backElement);
console.log(addBack);

//3.Find the names in the array
console.log("3.Find the names in the array")
var array=['Alice','Bob','ram',8,9];
var names=array.filter(
    function(item){
        return typeof item==='string';
    }
)
console.log(names)

//4. Filter an array greater than 10
console.log("4. Filter an array greater than 10")
var array=[40,30,20,8,9];
var greater_20=array.filter(
    function(item){
        return item>20;
    }
)
console.log(greater_20)

//5. Check the findindex less then 20
console.log("5. Check the findindex less then 20")
var array=[50,20,10,30,90];
var lesser_20=array.findIndex(checkArray)
function checkArray(item){
    return item<20;
}
console.log(lesser_20);