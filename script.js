const recipes = [];

//Declared index of the recipe to be edited
var indexOfRecipeToBeEdited = -1

// Declared a flag to set the edit mode
var isEditMode = false

// Update a recipe when the "Add Recipe" button is clicked
// If the recipe is new, then add the recipe to the recipes array 
// Use addRecipes() function to add the new recipe
// Else edit the recipe in the recipes array
// Clear the form's input fields using the clearInputFields() function
// Finally, display the recipes using the displayRecipes() function
document.getElementById('add-recipe-btn').addEventListener('click', function() {
    // Write your code here for task 1
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Determine whether the user is editing an existing recipe
    if (isEditMode) {
        // Update an existing recipe with new details
        recipes[indexOfRecipeToBeEdited] = { title, ingredients, instructions};
        isEditMode = false;
    } else {
        // Add new recipe
        addRecipe({ title, ingredients, instructions});
    }
    // Clear the input fields and update the display
    clearInputFields();
    displayRecipes();

});

// Clear the form's input fields
function clearInputFields() {
    // Write your code here for task 2
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
    
}

// Add the new recipe to the recipes array
function addRecipe(recipe) {
    // Write your code here for task 3
    recipes.push(recipe);
    
}

// Display Recipes
function displayRecipes() {
    // Write your code here for task 4
       const recipesList = document.getElementById('recipes');
       recipesList.innerHTML = '';

       recipes.forEach((recipe, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${recipe.title}</strong><br>
                        <em>Ingredients:</em> ${recipe.ingredients}<br>
                        <em>Instructions:</em> ${recipe.instructions}<br>
                        <div class="buttons">
                        <button onclick="editRecipe(${index})">Edit</button>
                        <button onclick="deleteRecipe(${index})">Delete</button>
                        </div>`
        recipesList.appendChild(li);
       });
}

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Write your code here for task 5
    const recipe = recipes[index];
    document.getElementById('title').value = recipe.title;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;

    indexOfRecipeToBeEdited = index;
    isEditMode = true;
}

// Delete the recipe object when the Delete button is clicked
function deleteRecipe(index){
    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1); // Remove 1 element at the specified index
        displayRecipes();
        console.log(recipes)
        clearInputFields();
        isEditMode = false;
    }
}