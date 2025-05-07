import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import configList from './assets/config_list.png'
import git_log from './assests/logs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
          Click on the Vite and React logos to learn more
      </p>
      <h1>Task 2:</h1>
      <p>runs a command that promts and reads your input for username and email</p>
      <p>inputs your username and email into the config  list file</p>
      <p>returns the list with updated username and email</p>
      <p>git will tell you that it is reinitializing</p>
      <img src={configList} alt="img"/>
      <h1>Task 3:</h1>
      <p>Better clarity when you look back into the commit messages.</p>
      <p>86df4e7 (HEAD -&gt; main, origin/main) Init commit: set up Vite React app
      </p>
      <h1>Task 4:</h1>
      <p>git diff shows what was added via + sign and removed via - sign</p>
      <h1>Task 5:</h1>
      <p>git restore undos changes made in the file </p>
      <h1>Task 6: </h1>
      <p>-u  sets the branch as the default so next time you don't ahve to type it again while pushing</p>
      <h1>Task 7: </h1>
      <img src={git_log} alt="img"/>
      <h1>Task 8</h1>
      <p>.gitgnore ignores files in the project</p>
      <p>logs and node_modules</p>
    </>
  )
}

export default App
