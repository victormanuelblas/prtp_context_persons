import './App.css';
//components
import PersonsList from './components/PersonsList'
import PersonProf from './components/PersonProf';
//context
import PersonState from './context/Person/PersonState';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PersonState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <PersonsList></PersonsList>
          </div>
          <div className="col-md-5">
            <PersonProf></PersonProf>
          </div>
        </div>
      </div> 
    </PersonState>
  );
}

export default App;
