import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './index.css'
import Home from './Home'
import Contact from './Contact'
import Service from './Service'
import About from './About'
import Links from './Links'

const App = ()=>{
    return(
        <>
        <h1 className='text mt-5'> ThapaTechnical</h1>
         <Links />
           <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/service' component={Service} />
               <Route exact path='/about' component={About} />
               <Route exact path='/contact' component={Contact} />
               <Redirect to='/' />
           </Switch>
        </>
    )
}
export default App