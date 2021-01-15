import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [text, setText] = useState(["vasilis", "nikos"]);

  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5")
      .then((data) => data.json())
      .then((text) => {
        setText(text);
      })
      .catch((er) => console.log(er));
  }, []);

  let textComponents =
    text &&
    text.map((data) => {
      return (
        <div key={uuidv4()} className="card-deck">
          <div className="card bg-primary">
            <div className="card-body text-center">
              <p className="card-text">
                <strong>TEXT </strong>
                {data}
              </p>
            </div>
          </div>
        </div>
      );
    });
  return (
    <main>
      <h1>MAIN</h1>
      <div className="container p-3 my-3 bg-dark text-white">
        <div className="row">
          <div className="col-sm-2">Left SideBar</div>
          <div className="col-sm-7">{textComponents}</div>
          <div className="col-sm-3">Right SideBar</div>
        </div>
      </div>
    </main>
  );
};
export default Home;
