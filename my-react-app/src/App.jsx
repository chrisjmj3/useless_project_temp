
import FoodGeneratorLanding from './Landingpg.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeirdRecipeGenerator from './pagetwo.jsx';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<FoodGeneratorLanding />} />
          <Route path="/weird-recipe-gen" element={<WeirdRecipeGenerator />} />
        </Routes>
      </Router>
     
    </>

  );

}

export default App
