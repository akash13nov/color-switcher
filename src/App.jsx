import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

const App = () => {
  const [colorData, setColorData] = useState("transparent");
  let color = [
    "red",
    "yellow",
    "orange",
    "green",
    "blue",
    "tomato",
    "skyblue",
    "pink",
    "lightseagreen",
    "purple",
    "gray",
    "coral",
  ];
  return (
    <>
      <h1>🎨 Color Swatcher</h1>
      <div className="flex gap-1.5 items-center justify-center">
        {color.map((item, idx) => (
          <Button key={idx} color={item} setColorData={setColorData}>
            {item}
          </Button>
        ))}
      </div>
      <ColorBox color={colorData} />
    </>
  );
};

export default App;
