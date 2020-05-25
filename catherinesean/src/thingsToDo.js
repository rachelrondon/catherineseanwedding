import React from 'react';
import HorizontalLine from './horizontalLine.js';
import newportmansions from '../public/newport_mansions.jpg';
import cliffWalk from '../public/cliffwalk.jpg';
import thamesStreet from '../public/thames_street.jpg';
import oceanDrive from '../public/ocean_drive.jpg';
import sightsailing from '../public/sightsailing.jpg';
import tennisHallOfFame from '../public/tennis.jpg';
import newportArtMuseum from '../public/newport_art_museum.jpg';
import sailNewport from '../public/sail_newport.jpg';
import newportvineyards from '../public/newport_vineyards.jpg';
import redwood from '../public/redwood.jpg';
import trinitynewport from '../public/trinity_church.jpg';
import eastonsBeach from '../public/eastons-beach.jpg';
import fortAdams from '../public/fort_adams.jpg';
import bowenswharf from '../public/bowens-wharf.jpg';

const ThingsToDo = () => {

  return (
    <div className="things-to-do">
      <div className="column">
        <div className="left-column">
          <div className="details">
            <div class="things-to-do-img">
              <img className="img" src={newportmansions} alt="newport mansions"></img>
            </div>
            <h2 className="details-title">Newport Mansions</h2>
            <h3 className="detail">424 Bellevue Avenue</h3>
            <h3 className="detail">Newport, RI 02840</h3>
            <div className="contact">
              <h3 className="detail">(401) 847-1000</h3>
              <button className="map-btn"><a target="_blank" href="https://www.newportmansions.org/">View</a></button>
            </div>
          </div>
        </div>
        <HorizontalLine color="#041e42" />
        <div className="right-column">
          <div className="details">
          <div class="things-to-do-img">
            <img className="img" src={cliffWalk} alt="newport cliffWalk"></img>
          </div>
            <h2 className="details-title">Cliff Walk</h2>
            <h3 className="detail">Narragansett Avenue</h3>
            <h3 className="detail">Newport, RI 02840</h3>
            <div className="contact">
              <h3 className="detail">(401) 849-8048</h3>
              <button className="map-btn"><a target="_blank" href="https://www.cityofnewport.com/">View</a></button>
            </div>
          </div>
        </div>
      </div>

        <div className="column">
          <div className="left-column">
          <div className="details">
          <div class="things-to-do-img">
            <img className="img" src={thamesStreet} alt="thames street"></img>
          </div>
            <h2 className="details-title">Thames Street</h2>
            <h3 className="detail">Thames Street</h3>
            <h3 className="detail">Newport, RI 02840</h3>
            <div className="contact">
              <button className="map-btn"><a target="_blank" href="https://www.google.com/maps?q=Thames+St,+Newport,+RI+02840,+USA&ftid=0x89e5af6651095f6f:0x7dbb4f27199baafb">View</a></button>
            </div>
          </div>
          </div>
          <HorizontalLine color="#041e42" />
          <div className="right-column">
            <div className="details">
            <div class="things-to-do-img">
              <img className="img" src={oceanDrive} alt="ocean drive"></img>
            </div>
              <h2 className="details-title">Ocean Drive</h2>
              <h3 className="detail">Newport, RI 02840</h3>
              <div className="contact">
                <h3 className="detail">(401) 849-8048</h3>
                <button className="map-btn"><a target="_blank" href="https://www.google.com/maps?cid=18346764038762742064">View</a></button>
              </div>
            </div>
          </div>
        </div>


          <div className="column">
            <div className="left-column">
            <div className="details">
              <div class="things-to-do-img">
                <img className="img" src={sightsailing} alt="sightsailing in newport"></img>
              </div>
              <h2 className="details-title">Sightsailing Newport</h2>
              <h3 className="detail">32 Bowens Wharf</h3>
              <h3 className="detail">Newport, RI 02840</h3>
              <div className="contact">
                <h3 className="detail">(401) 849-3333</h3>
                <button className="map-btn"><a target="_blank" href="https://sightsailing.com/">View</a></button>
              </div>
            </div>
            </div>
            <HorizontalLine color="#041e42" />
            <div className="right-column">
              <div className="details">
              <div class="things-to-do-img">
                <img className="img" src={tennisHallOfFame} alt="tennis hall of fame"></img>
              </div>
                <h2 className="details-title">International Tennis Hall of Fame</h2>
                <h3 className="detail">194 Bellevue Avenue</h3>
                <h3 className="detail">Newport, RI 02840</h3>
                <div className="contact">
                  <h3 className="detail">(401) 849-3990</h3>
                  <button className="map-btn"><a target="_blank" href="https://www.tennisfame.com/">View</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="left-column">
            <div className="details">
              <div class="things-to-do-img">
                <img className="img" src={newportArtMuseum} alt="Newport Art Museum"></img>
              </div>
              <h2 className="details-title">Newport Art Museum</h2>
              <h3 className="detail">76 Bellevue Avenue</h3>
              <h3 className="detail">Newport, RI 02840</h3>
              <div className="contact">
                <h3 className="detail">(401) 848-8200</h3>
                <button className="map-btn"><a target="_blank" href="https://newportartmuseum.org/">View</a></button>
              </div>
            </div>
            </div>
            <HorizontalLine color="#041e42" />
            <div className="right-column">
              <div className="details">
                <div class="things-to-do-img">
                  <img className="img" src={sailNewport} alt="Sail Newport"></img>
                </div>
                <h2 className="details-title">Sail Newport</h2>
                <h3 className="detail">72 Fort Adams Drive</h3>
                <h3 className="detail">Newport, RI 02840</h3>
                <div className="contact">
                  <h3 className="detail">(401) 849-8385</h3>
                  <button className="map-btn"><a target="_blank" href="https://sailnewport.org/">View</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="left-column">
            <div className="details">
            <div class="things-to-do-img">
              <img className="img" src={newportvineyards} alt="Newport Vineyards"></img>
            </div>
              <h2 className="details-title">Newport Vineyards</h2>
              <h3 className="detail">909 East Main Road</h3>
              <h3 className="detail">Middletown, RI 02842</h3>
              <div className="contact">
                <h3 className="detail">(401) 848-5161</h3>
                <button className="map-btn"><a target="_blank" href="https://www.newportvineyards.com/">View</a></button>
              </div>
            </div>
            </div>
            <HorizontalLine color="#041e42" />
            <div className="right-column">
              <div className="details">
              <div class="things-to-do-img">
                <img className="img" src={redwood} alt="Redwood Library"></img>
              </div>
                <h2 className="details-title">Redwood Library and Athenaum</h2>
                <h3 className="detail">50 Bellevue Avenue</h3>
                <h3 className="detail">Newport, RI 02840</h3>
                <div className="contact">
                  <h3 className="detail">(401) 847-0292</h3>
                  <button className="map-btn"><a target="_blank" href="http://www.redwoodlibrary.org/">View</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="left-column">
            <div className="details">
              <div class="things-to-do-img">
                <img className="img" src={trinitynewport} alt="Trinity Church"></img>
              </div>
              <h2 className="details-title">Trinity Church</h2>
              <h3 className="detail">141 Spring Street</h3>
              <h3 className="detail">Newport, RI 02840</h3>
              <div className="contact">
                <h3 className="detail">(401) 846-0660</h3>
                <button className="map-btn"><a target="_blank" href="https://www.trinitynewport.org/">View</a></button>
              </div>
            </div>
            </div>
            <HorizontalLine color="#041e42" />
            <div className="right-column">
              <div className="details">
              <div class="things-to-do-img">
                <img className="img" src={eastonsBeach} alt="Easton's Beach"></img>
              </div>
                <h2 className="details-title">Easton's Beach</h2>
                <h3 className="detail">175 Memorial Boulevard</h3>
                <h3 className="detail">Newport, RI 02840</h3>
                <div className="contact">
                  <h3 className="detail">(401) 845-5810</h3>
                  <button className="map-btn"><a target="_blank" href="https://www.cityofnewport.com/en-us/visiting-newport/eastons-beach">View</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="left-column">
            <div className="details">
            <div class="things-to-do-img">
              <img className="img" src={fortAdams} alt="Fort Adams"></img>
            </div>
              <h2 className="details-title">Fort Adams</h2>
              <h3 className="detail">80 Fort Adams Drive</h3>
              <h3 className="detail">Newport, RI 02840</h3>
              <div className="contact">
                <h3 className="detail">(401) 847-2400</h3>
                <button className="map-btn"><a target="_blank" href="http://www.riparks.com/Locations/LocationFortAdams.html">View</a></button>
              </div>
            </div>
            </div>
            <HorizontalLine color="#041e42" />
            <div className="right-column">
              <div className="details">
              <div class="things-to-do-img">
                <img className="img" src={bowenswharf} alt="Bowen's Wharf"></img>
              </div>
                <h2 className="details-title">Bowen's Wharf</h2>
                <h3 className="detail">13 Bowens Wharf</h3>
                <h3 className="detail">Newport, RI 02840</h3>
                <div className="contact">
                  <h3 className="detail">(401) 849-2243</h3>
                  <button className="map-btn"><a target="_blank" href="https://bowenswharf.com/">View</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ThingsToDo;
