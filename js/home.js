document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
   
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    nav.classList.toggle('show')
    toggle.classList.toggle('bx-x')
    bodypd.classList.toggle('body-pd')
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
   
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     
    });

    // ?==================================================================================================
    // !  html elements

     const mealContainer = document.getElementById('meal-container'); 
    // *  variables

    // ^  functions

  
    async function fetchRandomMeals() {
       
        mealContainer.innerHTML = ''; 
        const mealRequests = [];
    
        
        for (let i = 0; i < 20; i++) {
            mealRequests.push(fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => response.json()));
        }
    
       
        const meals = await Promise.all(mealRequests);
    
       
        meals.forEach(mealData => {
            const meal = mealData.meals[0];
            
      
            const mealDiv = document.createElement('article');
            mealDiv.classList.add('col-md-4', 'bg-body-secondary', 'p-3');
    
            mealDiv.innerHTML = `
                <div class="inner shadow">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-100">
                    <div class="article-body p-2">
                        <h2>${meal.strMeal}</h2>
                        <p>${meal.strCategory}</p>
                        <a href="${meal.strSource}" class="btn btn-primary"  onclick="fetchMealDetails()" target="_blank">Read More</a>
                    </div>
                </div>
            `;
    
            mealContainer.appendChild(mealDiv);
        });
    }
    
   
    window.onload = fetchRandomMeals;

 const categoryContainer = document.getElementById('meal-container');

 async function fetchMealCategories() {
     categoryContainer.innerHTML = '';
     
     try {
      
         const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
         const data = await response.json();
         const categories = data.categories;
 
         categories.forEach(category => {
             const categoryDiv = document.createElement('article');
             categoryDiv.classList.add('col-md-4', 'bg-body-secondary', 'p-3');
 
             categoryDiv.innerHTML = `
                 <div class="inner shadow">
                     <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-100">
                     <div class="article-body p-2">
                         <h2>${category.strCategory}</h2>
                         <p>${category.strCategoryDescription.substring(0, 100)}...</p>
                         <a href="#" class="btn btn-primary" onclick="fetchCategoryDetails('${category.strCategory}')" target="_blank">Explore Category</a>
                     </div>
                 </div>
             `;
 
             categoryContainer.appendChild(categoryDiv);
         });
     } catch (error) {
         console.error('Error fetching meal categories:', error);
     }
 }
 
 

const areaContainer = document.getElementById('meal-container');
 async function fetchMealAreas() {
     areaContainer.innerHTML = '';
     
     try {
       
         const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
         const data = await response.json();
         const areas = data.meals;
 
       
         areas.forEach(area => {
             const areaDiv = document.createElement('article');
             areaDiv.classList.add('col-md-4', 'bg-body-secondary', 'p-3');
 
             areaDiv.innerHTML = `
                 <div class="inner shadow">
                     <div class="article-body p-2">
                         <h2>${area.strArea}</h2>
                         <a href="#" class="btn btn-primary" onclick="fetchMealsByArea('${area.strArea}')" target="_blank">Explore ${area.strArea} Meals</a>
                     </div>
                 </div>
             `;
 
             areaContainer.appendChild(areaDiv);
         });
     } catch (error) {
         console.error('Error fetching meal areas:', error);
     }
 }
 


const ingredientContainer = document.getElementById('meal-container');

async function fetchMealIngredients() {
    ingredientContainer.innerHTML = '';
    
    try {

        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const data = await response.json();
        const ingredients = data.meals;

    
        ingredients.forEach(ingredient => {
            const ingredientDiv = document.createElement('article');
            ingredientDiv.classList.add('col-md-4', 'bg-body-secondary', 'p-3');

            ingredientDiv.innerHTML = `
                <div class="inner shadow">
                    <div class="article-body p-2">
                        <h2>${ingredient.strIngredient}</h2>
                        <p>${ingredient.strDescription ? ingredient.strDescription.substring(0, 100) + '...' : 'No description available.'}</p>
                        <a href="#" class="btn btn-primary" onclick="fetchMealsByIngredient('${ingredient.strIngredient}')" target="_blank">Explore Recipes</a>
                    </div>
                </div>
            `;

            ingredientContainer.appendChild(ingredientDiv);
        });
    } catch (error) {
        console.error('Error fetching meal ingredients:', error);
    }
}

function  showContacts(){

    document.getElementById("meal-card").innerHTML=`
    
<div class="container w-75 text-center p-5">
  <div class="row g-4">
      <div class="col-md-6">
          <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
          <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
              Special characters and numbers not allowed
          </div>
      </div>
      <div class="col-md-6">
          <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
          <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
              Email not valid *exemple@yyy.zzz
          </div>
      </div>
      <div class="col-md-6">
          <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
          <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid Phone Number
          </div>
      </div>
      <div class="col-md-6">
          <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
          <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid age
          </div>
      </div>
      <div class="col-md-6">
          <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
          <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid password *Minimum eight characters, at least one letter and one number:*
          </div>
      </div>
      <div class="col-md-6">
          <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
          <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid repassword 
          </div>
      </div>
  </div>
  <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
</div>

`
}

// *==================================================================================================
const searchContainer=document.getElementById('meal-container');
const rowData=document.getElementById('inner');

function showSearchInputs() {
  searchContainer.innerHTML = `
  <div class="row py-4 ">
      <div class="col-md-6 ">
          <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
      </div>
      <div class="col-md-6">
          <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
      </div>
  </div>`

   rowData.innerHTML = "";
}

async function searchByName(term) {
  closeSideNav()
  rowData.innerHTML = ""
  $(".inner-loading-screen").fadeIn(300)

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  response = await response.json()

  response.meals ? displayMeals(response.meals) : displayMeals([])
  $(".inner-loading-screen").fadeOut(300)

}

async function searchByFLetter(term) {
  closeSideNav()
  rowData.innerHTML = ""
  $(".inner-loading-screen").fadeIn(300)

  term == "" ? term = "a" : "";
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
  response = await response.json()

  response.meals ? displayMeals(response.meals) : displayMeals([])
  $(".inner-loading-screen").fadeOut(300)

}


























