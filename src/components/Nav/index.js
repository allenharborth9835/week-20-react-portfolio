import React from "react";

function Nav(props){
  //props that brings in categories, setCategory, and currentCategory 
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  //creates button from different categories
  return (
    <header className="flex-row px-1">
      <h1>
        <a href="/">
          Allen Harborth
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          {categories.map((category) =>(
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {category.name}
            </span>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav; 