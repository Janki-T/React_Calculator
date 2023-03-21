import React, { useState } from "react";

//here we import style module files
import Css from "./styles.css";

export default function Cal_Btn_Style() {
  
  const [result, setResult] = useState("");

  const handelClick = (event) => {
    setResult(result.concat(event.target.value));
    console.log(event.target.value);
  };

  const handelClearClick = (event) => {
    setResult("");
  };

  const handelEqualClick = (event) => {
    setResult(eval(result).toString());
  };
  return (
    <div className="container">
      <div className="width300px">
        <div>
          <input
            placeholder="0"
            value={result}
            className="input_bg"
            type="text"
            onChange={(e) => {
              if(e.target.value === "="){
                if(result.length > 0){
                setResult(eval(result).toString());  
                }
              }else{
              setResult(e.target.value)
            }
            }}
          />
        </div>

        <div>
          <input
            onClick={handelClearClick}
            value="AC"
            type="button"
            className="btn_normal_style bg_grey border_right"
          />
          <input
            onClick={handelClick}
            value="+/-"
            type="button"
            className="btn_normal_style bg_grey border_right"
          />
          <input
            onClick={handelClick}
            value="%"
            type="button"
            className="btn_normal_style bg_grey border_right"
          />
          <input
            onClick={handelClick}
            value="/"
            type="button"
            className="btn_normal_style bg_orange"
          />
        </div>

        <div>
          <input
            onClick={handelClick}
            value="7"
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelClick}
            value="8"
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelClick}
            value="9"
            type="button"
            className="btn_normal_style  border_top border_right"
          />
          <input
            onClick={handelClick}
            value="*"
            type="button"
            className="btn_normal_style bg_orange border_top"
          />
        </div>

        <div>
          <input
            onClick={handelClick}
            value="4"
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelClick}
            value="5"
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelClick}
            value="6"
            type="button"
            className="btn_normal_style  border_top border_right"
          />
          <input
            onClick={handelClick}
            value="-"
            type="button"
            className="btn_normal_style bg_orange border_top"
          />
        </div>

        <div>
          <input
            onClick={handelClick}
            value="1"
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelClick}
            value="2"
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelClick}
            value="3"
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelClick}
            value="+"
            type="button"
            className="btn_normal_style bg_orange border_top"
          />
        </div>

        <div>
          <input
            onClick={handelClick}
            value="0"
            type="button"
            className="btn_zero border_right border_top"
          />
          <input
            onClick={handelClick}
            value="."
            type="button"
            className="btn_normal_style border_right border_top"
          />
          <input
            onClick={handelEqualClick}
            value="="
            type="button"
            className="btn_normal_style bg_orange border_top"
          />
        </div>
      </div>
    </div>
  );
}
