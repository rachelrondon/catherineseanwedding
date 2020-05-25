import React from 'react';
import NavBar from './navbar.js';
import rosecliff from '../public/rosecliff.jpg';
import Typography from '@material-ui/core/Typography';
import couplePhotoOne from '../public/catharine_sean_one.png';
import couplePhotoTwo from '../public/catharine_sean_two.png';

export default function LandingPage() {
  
    return(
      <div>
        <NavBar />
        <div className="landing-page">
          <img className="rosecliff-photo" src={rosecliff} alt="rosecliff mansion"></img>
          <div className="names">
            <h2 className="name">Catharine McConnell</h2>
            <h2 className="name">&</h2>
            <h2 className="name">Sean Nolan</h2>
          </div>
          <div className="landing-page-details">
            <div className="date-details">
            <div className="day-details">
              <h2 className="day">
                  May 29
              </h2>
              <h3 className="year">
                  2021
              </h3>
            </div>
            <div className="location-details">
              <h2 className="city">
                Newport
              </h2>
              <h3 className="state">
                Rhode Island
              </h3>
            </div>
            </div>
          </div>
          <div className="photos">
            <img className="photo" src={couplePhotoOne} alt="catharine and sean"></img>
            <img className="photo" src={couplePhotoTwo} alt="catharine and sean"></img>
          </div>
        </div>
      </div>
    )
}
