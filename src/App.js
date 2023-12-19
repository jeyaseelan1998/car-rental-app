import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Login from "./components/Login"
import Client from './components/Client'
import Ventor from './components/Ventor'

import './App.css'

const Home = () => (
  <div className="d-flex flex-column  app-container">
    <Header />
    <Login />
  </div>
)

const App = () => (
  <switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/client" component={Client}/>
    <Route exact path="/ventor" component={Ventor}/>
  </switch>
)

export default App
