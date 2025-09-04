import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1', {}, 'Hello World!');

const MyApp = () => {
  return (<div>

    <h1>This My App</h1>
    <Heading />
  </div>
  );
}

const Heading = () => {
  return (<>{heading}
  </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MyApp />);