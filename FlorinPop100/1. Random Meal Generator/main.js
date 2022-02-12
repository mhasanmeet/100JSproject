const Get_Meal_Btn = document.getElementById('get_meal');
const Meal_Container = document.getElementById('meal');

Get_Meal_Btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0]);
    })
    .catch(e => {
        console.warn(e);
    });
});

const createMeal = meal => {
    const ingradients = [];

   // Get all ingradients from the object. Up to 10
   for (let i = 1; i <=20; i++){
       if(meal[`strIngredient${i}`]){
           ingradients.push(
               `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
           );
       } else{
           break;
       }
   }

   const newInnerHTML = ``
}