import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css';


function App() {
  //set up categories
  const [categories] = useState([
    {
      name: "About Me",
      index: 1
    },
    {
      name: "Portfolio",
      index: 2
    },
    {
      name: "Contact Me",
      index: 3
    },
    {
      name: "Resume",
      index: 4
    }
  ]);

  //hooks to set the category
  const [currentCategory, setCurrentCategory] = useState(categories[0])
  return (
  <>
    <body className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {
          currentCategory.index===1 ? <About />:
          currentCategory.index===2 ? <Portfolio/>:
          currentCategory.index===3 ? <Contact/>:
          <Resume/>
        }
        
      </main>
    </body>
    <footer>
      <Footer/>
    </footer>
  </>
  );
}

export default App;
