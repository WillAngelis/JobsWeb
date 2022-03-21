import React from 'react';
import './style.scss';

const Job = () => {
  return (
    <div className="job">
      <div className="jobCompany">
        <img
          src="https://s3-alpha-sig.figma.com/img/0dda/27ff/b80ddef31127a5eca4d31ad3c0766c66?Expires=1649030400&Signature=Uc1JEpgPMmQwq5RKW1C80DcuiC1GD5yMDrQKtBOQx0GapvgeHQLDl7-IF33QPmGT~-QWpuQTBPtBcbvNE4x0jWgHOCD2PIAUJCILxmjQi1DJUstZE3pYB1hyswS8-pxkXOedL3iFZg2Kxw2C3fD1Q06UZ0mnDrUn3aby9DVFwzEVbnIQhLZRe3R5kimw1hGKl6QnlldkBHLPB98U-TH8N6uL9hxHSnM810wK3BqX~5U-ncvy4QvUE1FGBjGTh739xz7ikWZU0Kki1k7Ksw4qHX~y-jRG7qmH1cLn3MYPR5DAZ38tcDcDzM6UMTqbMrwNwQiVQvv4hODMev~6ZN~Efg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
          className="jobLogo"
        />
      </div>
      <div className="jobInformation">
        <h2>Kasisto</h2>
        <h1>Front End Enginner</h1>
        <div>
          <h3>Full time</h3>
          <div className="localAndDate">
            <p>New York</p>
            <p>5 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
