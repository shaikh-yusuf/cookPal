let data = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

let cardSection = document.getElementById("card-section");
let vegSection = document.getElementById("card-veg");
let nonvegSection = document.getElementById("card-nonveg");
let searchSection = document.getElementById("searchBar");

function allRecipe() {
  data.forEach((ele) => {
    let div = document.createElement("div");
    div.innerHTML = `
    
      <div class="card" style="width: 20rem;">
      <img src="${ele.imageSrc}"  height='300px'class="card-img-top" alt="...">
      <div class="card-body">
        <span>${ele.type}</span>
        
        <h4 class="card-title">${ele.name}</h4>
        <p class="card-text danger-text">${ele.time} &nbsp; &nbsp;&nbsp; &nbsp;<span>${ele.rating}</span> </p>
       <button class='' onclick='toggel(this)'>  <span class="material-symbols-outlined">
       favorite
       </span></button>
      
      </div>
    </div>
      `;
    cardSection.appendChild(div);
  });
}

// veg recipe
function vegRecipe(e) {
  let filterveg = data.filter((ele) => ele.type === "veg");
  filterveg.forEach((ele) => {
    let div = document.createElement("div");
    div.innerHTML = `
    
      <div class="card" style="width: 20rem;">
      <img src="${ele.imageSrc}"  height='300px'class="card-img-top" alt="...">
      <div class="card-body">
        <span>${ele.type}</span>
        
        <h4 class="card-title">${ele.name}</h4>
        <p class="card-text danger-text">${ele.time} &nbsp; &nbsp;&nbsp; &nbsp;<span>${ele.rating}</span> </p>
       <button class='' onclick='toggel(this)'>  <span class="material-symbols-outlined">
       favorite
       </span></button>
      
      </div>
    </div>
      `;
    // vegSection.appendChild(div);
    cardSection.appendChild(div);
  });
}

// non-veg recipe
function nonvegRecipe() {
  let filterveg = data.filter((ele) => ele.type === "non-veg");
  filterveg.forEach((ele) => {
    let div = document.createElement("div");
    div.innerHTML = `
    
      <div class="card" style="width: 20rem;">
      <img src="${ele.imageSrc}"  height='300px'class="card-img-top" alt="...">
      <div class="card-body">
        <span>${ele.type}</span>
        
        <h4 class="card-title">${ele.name}</h4>
        <p class="card-text danger-text">${ele.time} &nbsp; &nbsp;&nbsp; &nbsp;<span>${ele.rating}</span> </p>
       <button class='' onclick='toggel(this)'>  <span class="material-symbols-outlined">
       favorite
       </span></button>
      
      </div>
    </div>
      `;
    // nonvegSection.appendChild(div);

    cardSection.appendChild(div);
  });
}

searchSection.addEventListener("keyup", (e) => {
  e.preventDefault();
  console.log(e.value);
});

// search

function searchFun() {
  let searchitem = searchSection.value.toLowerCase();
  let filetSearchitem = data.filter((ele) =>
    ele.name.toLowerCase().includes(searchitem)
  );
  filetSearchitem.forEach((ele) => {
    let div = document.createElement("div");
    div.innerHTML = `
    
      <div class="card" style="width: 20rem;">
      <img src="${ele.imageSrc}"  height='300px'class="card-img-top" alt="...">
      <div class="card-body">
        <span>${ele.type}</span>
        
        <h4 class="card-title">${ele.name}</h4>
        <p class="card-text danger-text">${ele.time} &nbsp; &nbsp;&nbsp; &nbsp;<span>${ele.rating}</span> </p>
       <button class='' onclick='toggel(this)'>  <span class="material-symbols-outlined">
       favorite
       </span></button>
      
      </div>
    </div>
      `;
    // nonvegSection.appendChild(div);

    cardSection.appendChild(div);
  });
}

