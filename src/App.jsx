import './App.css'
import ToDoList from './components/ToDoList'
import Header from './components/Header'

function App() {


  return (
      <div>
        <Header id='head'></Header>
        <ToDoList id='list'></ToDoList>
      </div>
  )
}

export default App
