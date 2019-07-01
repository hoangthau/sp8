import React from 'react';

import Left from './banner.jpg';
import Right1 from './terms.jpg';
import Right2 from './amenities.jpg';

import './Workspace.scss';

const Workspace = () => (
  <div className="workspace container">
    <h2>Your new workspace</h2>
    <p>View the SP8 gallery.</p>
    <div className="row gallery">
      <div className="col-md-6 left">
        <img src={Left} alt="left" />
      </div>
      <div className="col-md-6 right">
        <div className="right-1">
        
        </div>
        <div className="right-2">
         
        </div>
      </div>
    </div>
  </div>
);

export default Workspace;
