import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {(this.props.recipes && this.props.recipes.length > 0) ? (
            this.props.recipes.map(recipe => {
              return (
                <div key={recipe.title} className="col-md-4" style={{ marginBottom: "2rem" }}>
                    <div className="recipes__box">
                    <img src={recipe.image_url} alt={recipe.title} className="recipe__box-img" />
                      <div className="recipe__text">
                        <h5 className = "recipes__title" > {
                            recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`
                      } </h5>
                        <p className = "recipes__subtitle" > Publisher: <span > {recipe.publisher} </span></p >
                          </div> <button className = "recipe_buttons">
                          <Link to={{ pathname: `/recipe/${recipe.recipe_id}`, state: { recipe: recipe.title } }} > View Recipe </Link>
                        </button>
                      </div>
                </div>
              )
            })
          ) : <div className="error">Search for any recipe</div> }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    recipesFound: state.recipes.recipesFound,
    error: state.recipes.error
  }
}

export default connect(mapStateToProps, undefined)(Recipes)