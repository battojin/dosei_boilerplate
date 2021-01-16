import React from 'react'
import { Provider } from 'react-redux'
// import { Switch, Route } from 'react-router-dom'
import store from '../redux'
// import Home from '../components/home'

const Root = () => {
  return (
    <Provider store={store}>
      <div>
        Hello!
      </div>
    </Provider>
  )
}

export default Root
