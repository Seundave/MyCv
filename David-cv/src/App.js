
import './App.css';
import Educationalexperience from './components/Educationalexperience';
import Generalinfo from './components/Generalinfo';
import Practicalexperience from './components/Practicalexperience';

function App() {
  return (
    <div className="App">
      <Generalinfo/>
      <Educationalexperience/>
      <Practicalexperience/>
    </div>
  );
}

export default App;
