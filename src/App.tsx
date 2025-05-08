// #region Components
import Head from "./components/Head";
import FlowViewer from "./components/FlowViewer";
import InputPanel from "./components/InputPanel";
// #endregion
// #region CSS
import "./index.css";
// #endregion

function App() {
  return (
    <div className="bg-neutral-700 w-full h-screen text-neutral-50 flex flex-col">
      <Head />
      <div className="flex-1 flex flex-row w-full bg-green-200">
        <InputPanel />
        <div className="w-full h-full bg-green-200">
          <FlowViewer />
        </div>
      </div>
    </div>
  );
}
export default App;
