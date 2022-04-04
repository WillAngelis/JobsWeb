import React from 'react';
import './style.scss';

function TypeOfJob() {
  return (
    <section className="jobsType">
      <input type="checkbox" id="jobtype" name="jobtype" value="" />
      <label htmlFor="jobtype"> Full time </label>
    </section>
  );
}

export default TypeOfJob;
