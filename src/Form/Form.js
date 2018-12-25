import React, { Component } from 'react'
import { connect } from 'react-redux'

import  { recipeSearch, reset } from '../services/recipes'

const initialState = {
 searchText: ''
}

class Form extends Component {

  state = {...initialState}

  searchRecipe = (e) => {
      e.preventDefault()
      this.props.onReset()
      this.props.onSearch(this.state.searchText)
  } 

  onSearchTextChange = (e) => {
      const {_, value} = e.target;
      this.setState({
          searchText: value
      })
  }

  render() {
    return (
        <form onSubmit={this.searchRecipe} style={{ marginBottom:"2rem" }}>
            <input type="text" className="form__input" name="recipeName" value={this.state.searchText} onChange={this.onSearchTextChange} />
            <button className="form__button" type="submit">Search</button>            
        </form>
    )
  }
}

const mapDispatchProps = dispatch => {
    return {
        onReset: () => {
            dispatch(reset())
        },

        onSearch: (searchText) => {
            dispatch(recipeSearch(searchText))
        }
    }
}


export default connect(undefined, mapDispatchProps)(Form)