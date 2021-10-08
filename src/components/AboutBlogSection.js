import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import firebase from '../config/firebase';
import parse from 'html-react-parser';

const AboutBlogSection = () => {

  const db = firebase.firestore();

  const [latestArticle, setLatestArticle] = useState([])
  const [latestRecipe, setLatestRecipe] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingRecipes, setLoadingRecipes] = useState(true);


  async function getAllArticles() {
      const articlesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('articles');

      let latestArticleArr = [];

      await articlesRef.where('isPublished', '==', true).orderBy('createDate', 'desc').limit(1).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              latestArticleArr.push({ id: doc.id, ...doc.data() })
          });
      })
      .catch((error) => {
          setLoadingArticles(true);
          console.error("Error while getting documents: ", error);
      });
      setLatestArticle(latestArticleArr)
      setLoadingArticles(false);
  };

  async function getAllRecipes() {
      const recipesRef = await db.collection('articlesAndRecipes').doc('allPosts').collection('recipes');

      let latestRecipeArr = [];

      await recipesRef.where('isPublished', '==', true).orderBy('createDate', 'desc').limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            latestRecipeArr.push({ id: doc.id, ...doc.data() })
        });
      })
      .catch((error) => {
          setLoadingRecipes(true);
          console.error("Error while getting documents: ", error);
      });
      setLatestRecipe(latestRecipeArr);
      setLoadingRecipes(false);
  }

  useEffect(() => {
      getAllArticles();
      getAllRecipes();
  }, [])

    return (
        <section className="about-blog-section" name="about-blog">
          <div className="text-part-box container">
            <h2>Cupcake ipsum dolor?</h2>
            <div className="under-line"></div>
            <h3>Macaroon tart macaroon I love wafer biscuit dragée bear claw. I love jelly jelly-o cotton candy pastry cake. Marzipan bonbon I love ice cream jujubes. Toffee tootsie roll candy ice cream lemon drops liquorice.</h3>
          </div>
          <div className="new-posts-box">
            <div className="new-article-title-box">
              <div className="title">LATEST ARTICLE</div>
            </div>
            <div className="articles-recipes container">
              <div className="short-line-left"></div>
              { loadingArticles ? <div className="post-image"></div> :
                <div className="post-image">
                  { !latestArticle ? <div className="post"></div> : <div className={"new__article post " + latestArticle[0].featureImagePosition } style={{ background: `url(${latestArticle[0].featureImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div> }
                  <div className="post-data">
                    { !latestArticle ? <h3>Article title</h3> : <h3>{ latestArticle[0].title }</h3>}
                      <div className="content">
                      { !latestArticle ? <p>Article content</p> :  parse(latestArticle[0].content.slice(0, 200)) }
                      </div>
                    { !latestArticle ?
                      <a to="#">
                        <span>Read more...</span>
                      </a> :
                      <Link to={'/articles/' + 'art/' + latestArticle[0].id} >
                        <span>Read more...</span>
                      </Link> 
                    }
                  </div>
                </div> }
              <div className="logo"></div>
              { loadingRecipes ? <div className="post-image"></div> :
                <div className="post-image">
                  { !latestRecipe ? <div className="post"></div> : <div className={"new__recipe post " + latestRecipe[0].featureImagePosition } style={{ background: `url(${latestRecipe[0].featureImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>}
                  <div className="post-data">
                    { !latestRecipe ? <h3>Recipe title</h3> : <h3>{ latestRecipe[0].title }</h3>}
                      <div className="content">
                      { !latestRecipe ? <p>Recipe content</p> : parse(latestRecipe[0].content.slice(0, 200)) }
                      </div>
                    { !latestArticle ?
                      <a to="#">
                        <span>Read more...</span>
                      </a> :
                      <Link to={'/recipes/' + 'rec/' + latestRecipe[0].id} >
                        <span>Read more...</span>
                      </Link>
                    }
                  </div>
                </div>}
              <div className="short-line-right"></div>
            </div>
            <div className="new-recipe-title-box">
              <div className="title">LATEST RECIPE</div>
            </div>
          </div>
        </section>
    );
};

export default AboutBlogSection;