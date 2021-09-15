getRandomMeal()

async function getRandomMeal() {

  const respons = await fetch(" https://www.themealdb.com/api/json/v1/1/random.php")
  const responsData = await respons.json()
  const randomMeal = responsData.meals[0]

  addMeal(randomMeal)
}

function addMeal(mealData, random = false) {
  const meal = document.createElement("div")

  meal.classList.add("meal")

  meal.innerHTML = `
<div class="meal-header">
            ${!random ? `  <span class="random"> Random Recipe </span>` : ""}
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
`

  const btn = meal.querySelector(".meal-body .fav-btn")
  btn.addEventListener("click", () => {
    btn.classList.toggle("active")
  })
  meals.appendChild(meal)

}