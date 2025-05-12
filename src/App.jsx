import './App.css'
import ToDoList from './components/ToDoList'
import Header from './components/Header'

function App() {
  return (
      <div>
        <h1 id='head'>
          <Header></Header>
        </h1>
        <p id='list'>
          <ToDoList></ToDoList>
        </p>
      </div>
  )
}

export default App
