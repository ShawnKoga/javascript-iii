// Nested
var employees = [{
  "firstName": "Von",
  "lastName": "Budibent",
  "email": "vbudibent0@163.com",
  "department": "Sales"
}, {
  "firstName": "Catherina",
  "lastName": "Swalowe",
  "email": "cswalowe1@example.com",
  "department": "Engineering"
}, {
  "firstName": "Theo",
  "lastName": "Trill",
  "email": "ttrill2@sina.com.cn",
  "department": "Services"
}, {
  "firstName": "Elsy",
  "lastName": "McCrorie",
  "email": "emccrorie3@netscape.com",
  "department": "Legal"
}, {
  "firstName": "Lorie",
  "lastName": "Handsheart",
  "email": "lhandsheart4@fotki.com",
  "department": "Research and Development"
}]
// Create a function called 'employeeUpdater'. employeeUpdater will loop over the array above and perform the following:
//  1. If employee's first name is Theo, remove that employee because he just got fired.
//  2. If the employee's first name is Lorie, change her department to 'HR'.
//  3. Return the updated employee array.


function employeeUpdater(arr){
  for(var i = arr.length - 1; i >= 0; i--){
    if(arr[i].firstName === "Theo"){
      arr.splice(i, 1);
    }
    if(arr[i].firstName === "Lorie"){
      arr[i].department = 'HR';
    }
  }return arr;
}


// The array below represents IDs tied to reported workplace accidents. 
// An employee accidentally entered in duplicates to array, 
// making it look as though there are more accidents this year than there actually are. 
// 1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the workplaceAccidents array.
// 2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array. 
//    Loop over the array from front to back.
// 3. Return the updated array.


var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];

function removeDuplicates(arr){
  for(var i = 0; i < arr.length; i++) {
    for (var j = arr.length-1; j > i; j--) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;


var cat = {
  name: 'Fluffy',
  catFriends: [{
    name: 'Grumpy',
    activities: ['be grumpy', 'eat food']
  }, {
    name: 'Lazy Bones',
    activities: ['sleep', 'pre-sleep naps']
    }]
}


// You need to feed on of Fluffy's friends, Grumpy. Navigate the nested arrays and objects to:
// 1. invoke the 'feed' method.

// Fluffy has two friends, Grumpy and Lazy Bones. 
// 1. Assign the value of Grumpy's 2nd activity to the variable below.

var grumpyActivity = cat.catFriends[0].activities[1];