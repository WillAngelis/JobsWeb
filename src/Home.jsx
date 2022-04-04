import { useEffect, useState } from 'react';
import AsideParameters from './components/AsideParameters';
import Container from './components/UI/Container';
import Header from './components/UI/Header';
import Job from './components/Job';
import TypeOfJob from './components/TypeOfJob';
import Button from './components/Button/Button';

import api from './services/api';

import './index.scss';

const Home = () => {
  const [jobs, setJob] = useState([]);
  const [search, setSearch] = useState('');
  const [params, setParams] = useState('');

  useEffect(() => {
    api.get('/jobs?q=' + params).then((response) => {
      setJob(response.data);
      console.log(params);
    });
  }, [params]);

  return (
    <Container>
      <Header />
      <nav>
        <form>
          <input
            type="search"
            placeholder="Title, companies, expertise or benefits"
            name=""
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
          <Button setParams={setParams} search={search} />
        </form>
      </nav>
      <div className="container">
        <AsideParameters>
          <TypeOfJob />
        </AsideParameters>
        <section className="jobs">
          {jobs.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </section>
      </div>
    </Container>
  );
};

export default Home;
