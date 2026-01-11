import { useState } from 'react'
import { useEffect } from "react";

import Header from './Header.jsx'
import Carousels from './Carroussels.jsx'
import ArticleList from './articleList.jsx';
import '/src/css/reset.css'
import '/src/css/color.css'
import '/src/css/style.css'
import '/src/css/header.css'
import '/src/css/portrait.css'
import '/src/css/landscape.css'
import '/src/css/carousel.css'
import '/src/css/articleList.css'

function App() {
  const [infoArticle, setInfoArticle] = useState([]);

  const getArticle = function () {
    fetch("/produit.json")
      .then((res) => res.json())
      .then((data) => {
        setInfoArticle(data);
      });
  };

  useEffect(() => {
    getArticle();
  }, []);

  if (infoArticle.length > 0) {
    return (
      <>
        <Header />
        <Carousels infoArticle={infoArticle}></Carousels>
        <ArticleList infoArticle={infoArticle}></ArticleList>
      </>
    )
  }
}

export default App
