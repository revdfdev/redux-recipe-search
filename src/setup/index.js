import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Root from '../root/Root'

export default class Setup extends Component {
    
    constructor() {
        super()
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({
                isLoading: false
            }))
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Root />
            </Provider>
        )
    }
}
