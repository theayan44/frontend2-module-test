let recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

let filterArray = [...recipes];

const recipeContainer = document.getElementsByClassName("recipe-container")[0];

function showRecipes(array) {
    recipeContainer.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${array[i].imageSrc}" alt="image">
            <div class="recipe-details">
                <span>${array[i].type}</span>
                <div>
                    <h3 style="margin: 0;">${array[i].name}</h3>
                    <div class="rating">
                        <span class="material-icons" id="rating-icon">star_rate</span>
                        <span id="rating-number">${array[i].rating}</span>
                    </div>
                </div>
                <div class="duration">
                    <h3 style="margin: 0; color: rgb(218, 2, 2);">${array[i].time}</h3>
                    <div id="${i}">
                        <i class="material-icons" id="${array[i].isLiked ? "love-icon" : "love-icon-false"}" onClick="handleLike(this)">favorite</i>
                        <i class="material-icons" id="comment-icon">mode_comment</i>
                    </div>
                </div>
            </div>
        `;
        recipeContainer.appendChild(card);
    }
}

showRecipes(recipes);

function handleSearch(event) {
    const searchValue = event.value;
    filterArray = recipes.filter((element) => {
        return element.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
    })
    handleFilter();
    // showRecipes(filterArray);
}

function handleClick(event) {
    const type = event.id;
    // let arr;
    if (type == "all")
        filterArray = [...recipes];
    else {
        filterArray = recipes.filter((element) => {
            return element.type == type;
        })
    }
    handleFilter();
    // showRecipes(filterArray);
}

function handleFilter() {
    let arr;
    const filterInput = document.getElementsByClassName("filter-input");
    if ((filterInput[0].checked && filterInput[1].checked) || (!filterInput[0].checked && !filterInput[1].checked))
        arr = [...filterArray];
    else if (filterInput[0].checked) {
        arr = filterArray.filter((element) => {
            return element.rating >= 4;
        })
    } else if (filterInput[1].checked) {
        arr = filterArray.filter((element) => {
            return element.rating < 4;
        })
    }
    showRecipes(arr);
}

function handleLike(event) {
    const parent = event.parentNode;
    const index = Number(parent.id);
    if (event.id == "love-icon") {
        event.id = "love-icon-false";
        recipes[index].isLiked = false;
    }
    else {
        event.id = "love-icon";
        recipes[index].isLiked = true;
    }
    console.log(recipes);
}