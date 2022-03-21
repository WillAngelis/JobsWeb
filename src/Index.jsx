import AsideParameters from './components/AsideParameters';
import Container from './components/Container';
import Header from './components/Header';
import Job from './components/Job';
import Jobs from './components/Jobs';
import SearchContainer from './components/SearchContainer';
import './index.scss';

function Index() {
  return (
    <Container>
      <Header />
      <SearchContainer />
      <div className="container">
        <AsideParameters />
        <Jobs>
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
        </Jobs>
      </div>
    </Container>
  );
}

export default Index;
