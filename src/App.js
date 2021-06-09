import React, {useState} from 'react';
import './App.css';
import Quote from './Components/Quote';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Components/theme';
import { GlobalStyles } from './Components/global';
 


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  return (
        
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
      
    
    
    <h2 className="title"><i>Random Quote Generator</i></h2>
    {/* {  quotes.map((q, index) => (
      <Quote quoteText={q.quote} key={index}/>ss
    ))
    } */}
  
    <Quote  />
    
  
   
  
  </div>
    </ThemeProvider>
    
    
  );
}

export default App;

