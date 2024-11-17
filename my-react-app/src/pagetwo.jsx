import React, { useState } from 'react';

import "./pagetwo.css"

const WeirdRecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('');
  const [cookingTime, setCookingTime] = useState('30');
  const [cookingType, setCookingType] = useState('bake');
  const [cuisine, setCuisine] = useState('fusion');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRecipe = () => {
    setLoading(true);
    // Simulate API call with setTimeout
    setTimeout(() => {
      const ingredientList = ingredients.split(',').map(i => i.trim());
      
      const weirdCombinations = [
        `${ingredientList[0]} stuffed ${ingredientList[1]}`,
        `Caramelized ${ingredientList[0]} with ${ingredientList[1]} sauce`,
        `${cuisine} style ${ingredientList[0]} ${cookingType}d with ${ingredientList[1]} glaze`,
        `Deconstructed ${ingredientList[0]} and ${ingredientList[1]} fusion`,
      ];

      const randomRecipe = {
        name: weirdCombinations[Math.floor(Math.random() * weirdCombinations.length)],
        instructions: [
          `Prepare ${ingredientList.join(' and ')} carefully`,
          `${cookingType} for ${cookingTime} minutes`,
          'Season with unexpected spices',
          'Plate artistically with edible flowers'
        ],
        difficulty: 'Experimental',
        servings: '2-4 brave souls'
      };

      setRecipe(randomRecipe);
      console.log(randomRecipe);
      setLoading(false);
    }, 1500);
  };

  const styles = {
    // container: {
    //   display: "flex",
    //   justifyContent: "center",
    //   margin :"auto",
    //   maxWidth: '800px',
    //   margin: '0 auto',
    //   padding: '20px',
    //   fontFamily: 'Arial, sans-serif'
    // },
    // card: {
    //   backgroundColor: 'white',
    //   borderRadius: '8px',
    //   padding: '20px',
    //   marginBottom: '20px',
    //   boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    // },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
      textAlign: 'center'
    },
    formGroup: {
      marginBottom: '15px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      marginBottom: '10px'
    },
    select: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      backgroundColor: 'white'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px',
      marginBottom: '20px'
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s'
    },
    buttonDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    },
    recipeCard: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px'
    },
    recipeName: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#333'
    },
    instructionList: {
      listStyle: 'decimal',
      paddingLeft: '20px',
      marginBottom: '15px'
    },
    instructionItem: {
      marginBottom: '8px',
      lineHeight: '1.4'
    },
    recipeFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '#666',
      fontSize: '14px'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      marginRight: '10px',
      border: '3px solid #ffffff',
      borderTop: '3px solid #4CAF50',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }
  };

  return (
    <div style={styles.container} className='page_two_container'>
      <div style={styles.card} className='card'>
        <h1 style={styles.title}>🧪 Weird Recipe Generator</h1>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Available Ingredients (comma-separated)</label>
          <input
            style={styles.input}
            placeholder="e.g., chocolate, sardines, maple syrup"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div style={styles.gridContainer}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Cooking Time (minutes)</label>
            <input
              style={styles.input}
              type="number"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Cooking Type</label>
            <select
              style={styles.select}
              value={cookingType}
              onChange={(e) => setCookingType(e.target.value)}
            >
              <option value="bake">Bake</option>
              <option value="fry">Fry</option>
              <option value="grill">Grill</option>
              <option value="steam">Steam</option>
              <option value="ferment">Ferment</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Cuisine Type</label>
            <select
              style={styles.select}
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="fusion">Fusion</option>
              <option value="molecular">Molecular</option>
              <option value="avant-garde">Avant-garde</option>
              <option value="experimental">Experimental</option>
            </select>
          </div>
        </div>

        <button
          style={{
            ...styles.button,
            ...(loading || !ingredients ? styles.buttonDisabled : {})
          }}
          onClick={generateRecipe}
          disabled={loading || !ingredients}
        >
          {loading ? (
            <>
              <div style={styles.loadingSpinner}></div>
              Generating...
            </>
          ) : (
            'Generate Weird Recipe'
          )}
        </button>
      </div>

      {recipe && (
        <div style={styles.card}>
          <h2 style={styles.recipeName}>{recipe.name}</h2>
          <div>
            <h3 style={{...styles.label, marginTop: '15px'}}>Instructions:</h3>
            <ol style={styles.instructionList}>
              {recipe.instructions.map((step, index) => (
                <li key={index} style={styles.instructionItem}>{step}</li>
              ))}
            </ol>
          </div>
          <div style={styles.recipeFooter}>
            <span>Difficulty: {recipe.difficulty}</span>
            <span>Serves: {recipe.servings}</span>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default WeirdRecipeGenerator;