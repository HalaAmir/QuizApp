import "./IconQuiz.css";


export default function IconQuiz(prop) {
  return (
    <div>
  
      <div className="p-3 mt-3">
        <img src={prop.SelectionIcon} alt="icon" />
        <b className="ps-5">{prop.SelectionName}</b>
      </div>
    
    </div>

  );
}
