import React from 'react';
import './style.scss';

const AsideParameters = () => {
  return (
    <>
      <aside>
        <section className="jobsType">
          <input type="checkbox" id="jobtype" name="jobtype" value="" />
          <label htmlFor="jobtype"> Full time </label>
        </section>
        <section className="searchLocation">
          <h3>LOCATION</h3>
          <input type="text" placeholder="City, state, zip code or country" />
        </section>
        <section>
          <form className="locals">
            <div>
              <input type="radio" id="london" name="local" value="London" />
              <label htmlFor="london">London</label>
            </div>
            <div>
              <input
                type="radio"
                id="amsterdam"
                name="local"
                value="Amsterdam"
              />
              <label htmlFor="amsterdam">Amsterdam</label>
            </div>
            <div>
              <input type="radio" id="new_york" name="local" value="New York" />
              <label htmlFor="new_york">New York</label>
            </div>
            <div>
              <input type="radio" id="berlin" name="local" value="Berlin" />
              <label htmlFor="berlin">Berlin</label>
            </div>
          </form>
        </section>
      </aside>
    </>
  );
};

export default AsideParameters;
