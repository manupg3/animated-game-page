import React from 'react'
import '../assets/css/cardsHoverComplete.scss'
import {Link, Route, Routes} from 'react-router-dom';

export default function CardsHoverComplete({title,description,linkCard}) {
    console.log("LINK CARD", linkCard)
  return (
    <div>
    <Link to={linkCard} className="link-cards">
        <div class="container">
  <a class="card1" href="#">
    <h3>{title}</h3>
    <p class="small p-card-hover-complete">{description}</p>
    <div class="go-corner" href="#">
  
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
    </div>
    </Link>
    </div>
  )
}

