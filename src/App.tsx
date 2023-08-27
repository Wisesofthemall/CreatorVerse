import { useState } from "react";
import "./App.css";
import CustomButton from "./components/inputs/CustomButton.tsx";
import AddCreator from "./components/AddCreator.tsx";
import ViewCreators from "./components/ViewCreators.tsx";
function App() {
  const [toggleView, setToggleView] = useState(false);

  const handleToggle = (clicked: string) => {
    console.log("Boom");
    if (clicked === "view") {
      setToggleView(true);
    } else {
      setToggleView(false);
    }
  };
  return (
    <div className="">
      <div className="text-2xl  md:text-6xl lg:text-8xl text-stone-50 grid place-items-center h-80">
        CreatorVerse
      </div>
      <div className="text-stone-50 text-center mb-11">
        Find all your favorite creator's social here!
      </div>
      <div className="flex justify-evenly mb-12">
        <div onClick={() => handleToggle("view")} className="">
          <CustomButton title="View All Creators" />
        </div>
        <div onClick={() => handleToggle("Add")} className="">
          <CustomButton title="Add a Creator" />
        </div>
      </div>
      <div className="">
        {toggleView ? (
          <ViewCreators />
        ) : (
          <AddCreator handleToggle={handleToggle} />
        )}
      </div>
    </div>
  );
}

export default App;
