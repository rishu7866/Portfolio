import React from "react";
import '../CSS/certificate.css'
import { data } from "./Data";
const Certificate = () => {
  return (
<>
<div>
        <div className="containerr">
          {data.map((daaa) => (
            <div className="container_two">
              <div className="dispp">
                <img src={daaa.dis} alt="display pic" />
                <span className="name">{daaa.name}</span>
                <div className="dop">{daaa.dop}</div>
              </div>
              <div className="th">
                <div className="quotes">
                  <p>{daaa.quote}</p>
                </div>
              </div>
              <div className="four">
                <img src={daaa.imag} alt="j" />
              </div>
            </div>
          ))}
        </div>
      </div>
</>

  );
};

export default Certificate;
