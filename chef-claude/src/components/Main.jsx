import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";


export default function Main() {
    const [ingredients, setIngredients] = React.useState(["apple", "banana", "carrot", "date", "eggplant", "fig", "grape", "honey", "ice cream", "jelly", "kiwi", "lemon", "mango", "nut", "olive", "pear", "quince", "raspberry", "strawberry", "tomato", "ugli fruit", "vanilla", "watermelon", "ximenia", "yam", "zucchini"]);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    const [isShown, setIsShown] = React.useState(false);

    function addIngredient(event) {
        event.preventDefault(); // Doğru event kullanımı
        const newIngredient = event.target.ingredient.value.trim(); // Formdan veri al

        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        }

        event.target.reset(); // Formu temizle
    }

    function toggleRecipeShown() {
        setIsShown(prevIsShown => !prevIsShown);
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {
                ingredients.length > 0 && (
                    <section>
                        <h2>Ingredients on hand:</h2>
                        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                        {ingredients.length > 3 && <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={toggleRecipeShown}>Get a recipe</button>
                        </div>}
                    </section>
                )
            }
            {
                isShown && (
                    <ClaudeRecipe />
                )
            }


        </main>
    );
} 