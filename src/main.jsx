import { StrictMode } from 'react' // StrictMode helps identify certain problems during developement 
import { createRoot } from 'react-dom/client' //createroot it create the react root that manages the UI inside our HML element 
import './index.css' // import global css 
import App from './App.jsx' // import main app component

createRoot(document.getElementById('root')).render( // find the HTML element, .render() tells react what to display
  <StrictMode>
    <App /> {/*tells react to display our app component*/}
  </StrictMode>,
)
