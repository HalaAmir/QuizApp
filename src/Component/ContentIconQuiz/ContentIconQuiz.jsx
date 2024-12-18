import "./ContentIconQuiz.css";
import IconQuiz from "../../Component/IconQuiz/IconQuiz";
import ImgHtml from "../../assets/css-code.png";
import Imgcss from "../../assets/css.png";
import Imgjs from "../../assets/js-format.png";
import Imgaccess from "../../assets/accessability.png";

export default function ContentIconQuiz() {
  const myArray = [
    {
      SelectionName: "HTML",
      SelectionIcon: ImgHtml,
      uniqueId :1
    },
    {
      SelectionName: "Css",
      SelectionIcon: Imgcss,
      uniqueId :2
    },
    {
      SelectionName: "Javascript",
      SelectionIcon: Imgjs,
      uniqueId :3
    },
    {
      SelectionName: "Accessibility",
      SelectionIcon: Imgaccess,
      uniqueId :4
    },
  ];

  return (
    <>
      <div className="iconquiz ">
    
        {myArray.map((item)=>{
          return (
            <IconQuiz
            key={item.uniqueId}
             SelectionName={item.SelectionName} 
            SelectionIcon={item.SelectionIcon}
            ></IconQuiz>
          );
        })}
      </div>
    </>
  );
}
