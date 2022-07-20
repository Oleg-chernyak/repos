
let arr = [];
  
function adder () {
  
  fetch('https://randomuser.me/api/')
  .then((response) => {
    return response.json()
  }).then((data) => {  
    let obj = data.results[0];
    render(obj);
}) 
}

function render (obj) {
  let root = document.getElementById('wrapper');
  arr.push(`<div class="card" style="width: 12rem;">
  <img src="${obj.picture.large}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${obj.name.title} ${obj.name.first} ${obj.name.last}</h5>
    <p class="gender">${obj.gender}</p>
    <p class="phone">${obj.phone}</p>
    <p class="location">${obj.location.country} ${obj.location.city}</p>
    <p class="email">${obj.email}</p>
    <p class="age">${obj.dob.age}</p>
  </div>
</div>`);
  let string = arr.toString();
  root.innerHTML = string;
}

function save (array) {
  console.log(arr);
  let myStorage = window.localStorage;
  myStorage.array = arr;
  console.log(myStorage.array);
}

function load () {
    let myStorage = window.localStorage;
    let root = document.getElementById('wrapper');
    root.innerHTML = myStorage.array.toString();

}

function clear2 () {
  let root = document.getElementById('wrapper');
  root.innerHTML = "";
  console.log(root);
}


  
  


 






