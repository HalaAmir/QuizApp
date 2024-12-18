import "./App.css";
import ContentIconQuiz from "./Component/ContentIconQuiz/ContentIconQuiz";
import ContentQuiz from "./Component/ContentQuiz/ContentQuiz";

function App() {
  return (
    <>
      <div className="container-fluid ">
        <div className="container ">
          <div className="row vh-100">
          <div className="col-md-6 ">
              <ContentQuiz></ContentQuiz>
            </div>
            <div className="col-md-6 ">
            
              <ContentIconQuiz></ContentIconQuiz>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
