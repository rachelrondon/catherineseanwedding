import React from 'react';
import HorizontalLine from './horizontalLine.js';

const Schedule = () =>  {

  return (
      <div className="schedule">
        <div className="left-column">
          <div className="details">
            <h2 className="details-title">Wedding</h2>
            <h3 className="detail">Saturday, May 29, 2021</h3>
            <h3 className="detail">5:30pm - 11:00pm</h3>
          </div>
          <div className="details">
            <h2 className="details-title">Ceremony</h2>
            <h3 className="detail">Saturday, May 29, 2021</h3>
            <h3 className="detail">6:00pm - 6:30pm</h3>
          </div>
          <div className="details">
            <h2 className="details-title">Cocktail Hour</h2>
            <h3 className="detail">Saturday, May 29, 2021</h3>
            <h3 className="detail">6:30pm - 7:30pm</h3>
          </div>
          <div className="details">
            <h2 className="details-title">Reception</h2>
            <h3 className="detail">Saturday, May 29, 2021</h3>
            <h3 className="detail">7:30pm - 11:00pm</h3>
          </div>
        </div>
        <HorizontalLine color="#041e42" />
        <div className="right-column">
          <div className="details">
            <h2 className="details-title">Rosecliff</h2>
            <h3 className="detail">548 Bellevue Avenue</h3>
            <h3 className="detail">Newport, RI 02840</h3>
          </div>
          <div className="details">
            <h2 className="details-title">Black Tie Optional</h2>
            <h3 className="detail">Please arrive at 5:30pm to enjoy mingling and refreshments. The ceremony will begin promptly at 6pm.</h3>
            <button className="map-btn"><a target="_blank" href="https://www.google.com/maps?cid=274067868390033300">Map</a></button>
          </div>
        </div>
      </div>
  )
}

export default Schedule;
