import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="title-styling">
        <h3>DevQuizzy</h3>
      </div>

      <div className="text-styling">
        <p>
          Bienvenue sur notre site web quiz de programmation linguistique ! Si
          vous êtes passionné de programmation et souhaitez tester vos
          connaissances dans différents langages de programmation, vous êtes au
          bon endroit. Notre site web propose une variété de quiz dans plusieurs
          langages de programmation tels que HTML, REACT, Css, JavaScript et
          bien plus encore. Nous avons conçu nos quiz pour être adaptatifs et
          offrir des défis adaptés à tous les niveaux, des débutants aux
          experts. Que vous soyez à la recherche d'un défi personnel ou que vous
          cherchiez à tester vos compétences en programmation pour une entrevue
          d'emploi, notre site web est là pour vous aider. Nous vous invitons à
          explorer notre site web et à découvrir nos quiz de programmation
          linguistique. Nous sommes convaincus que vous trouverez des quiz
          intéressants et stimulants qui vous aideront à approfondir vos
          connaissances et à améliorer vos compétences en programmation.
        </p>
      </div>
      <div className="quiz-button">
        <Link to="/quiz">
          <button>Demare Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
