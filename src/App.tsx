import "./App.css";
import CustomButton from "./components/inputs/CustomButton.tsx";
function App() {
  return (
    <div className="">
      <div className="text-2xl  md:text-6xl lg:text-8xl text-stone-50 grid place-items-center h-80">
        CreatorVerse
      </div>
      <div className="text-stone-50 text-center mb-11">
        Find all your favorite creator's social here!
      </div>
      <div className="flex justify-evenly ">
        <CustomButton title="View All Creators" />
        <CustomButton title="Add a Creator" />
      </div>
    </div>
  );
}

export default App;
