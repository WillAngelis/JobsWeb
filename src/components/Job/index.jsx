import React from 'react';
import './style.scss';
import { daysAgo } from '../../services/data';

const Job = ({ title, logoUrl, company, type, local, date }) => {
  return (
    <div className="job">
      <div className="jobCompany">
        <img src={logoUrl} alt="" className="jobLogo" />
      </div>
      <div className="jobInformation">
        <h2>{company}</h2>
        <h1>{title}</h1>
        <div>
          <h3>{type}</h3>
          <div className="localAndDate">
            <p>{local}</p>
            <p>{daysAgo(date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
