import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PostContainer from './containers/PostContainer';

function App() {

  return (
    <div className="background-grey">
      <NavBar />
      <PostContainer />
    </div>
  );
}

export default App;
