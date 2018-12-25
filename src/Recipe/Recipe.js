import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { singleSearch, resetSingle } from '../services/singlerecipe'

class Recipe extends Component {

    componentDidMount() {
        const title = this.props.location.state.recipe
        this.props.onReset()
        this.props.onSearch(title)
    }
    

    render() {
        return (
            <div className="container">
                {this.props.activeRecipes &&
                <div className="active-recipe" style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                    <img className="active-recipe__img" src={this.props.activeRecipes.image_url} alt={this.props.activeRecipes.title}/>
                    <h3 className="active-recipe__title">{ this.props.activeRecipes.title }</h3>
                    <h4 className="active-recipe__publisher">
                        Publisher: <span>{ this.props.activeRecipes.publisher }</span>
                    </h4>
                    <p className="active-recipe__website">Website: 
                        <span><a href={this.props.activeRecipes.publisher_url}>{this.props.activeRecipes.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe__button">
                        <Link to="/">Go Home</Link>
                    </button>
                </div>
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        activeRecipes: state.singlerecipe.activeRecipes,
        activeRecipeFound: state.singlerecipe.activeRecipeFound,
        error: state.singlerecipe.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (title)  => { 
            dispatch(singleSearch(title))
        },

        onReset: () => { 
            dispatch(resetSingle())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)