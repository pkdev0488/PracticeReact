// function App(){
//   return(
//     <h1>Hello</h1>
//   )
// }
// export default App;
import Movies from "./components/Movies";
import { Component } from "react";
class App extends Component{
  render(){
    return(
      <div className="app">
        <h1>Hello World!</h1>
        <Movies/>
        <Movies/>
        <Movies/>
        <Movies/>
      </div>
    )
  }
}
export default App;