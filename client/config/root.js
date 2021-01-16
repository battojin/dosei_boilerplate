import React from 'react'
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
// import { Switch, Route } from 'react-router-dom'
import store from '../redux'
import Home from '../components/home'

const Root = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

// const Root = (props) => {
//   return (
//     <Provider store={store}>
//       <ConnectedRouter history={history} location={props.location} context={props.context}>
//         <Switch>
//           <Route exact path="/" component={() => <Home />} />
//           <Route exact path="/dashboard" component={() => <Home />} />
//         </Switch>
//       </ConnectedRouter>
//     </Provider>
//   )
// }

export default Root
