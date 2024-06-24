import Flow from "./components/flow";
import "./App.css";

function App() {
  return (
    <>
      <header className="h-4/5 p-4 bg-gray-300 flex flex-row-reverse px-30px">
        <button className="outline rounded outline-1 bg-white hover:bg-slate-50 font-semibold text-purple-900 p-1 flex-row-reverse outline-purple-800">
          Save Changes
        </button>
      </header>
      <section className="flex flex-row">
        <div className="w-4/5 flow-container">
          <Flow />
        </div>
        <div className="w-1/5  border-slate-400 bg-white border-s-2 border-t-2"></div>
      </section>
    </>
  );
}

export default App;
