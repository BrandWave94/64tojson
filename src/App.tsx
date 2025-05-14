// #region Components
import Head from "./features/Head";
import FlowViewer from "./features/FlowViewer";
import InputPanel from "./features/InputPanel";
// #endregion
// #region CSS
import "./index.css";
// #endregion

function App() {
  return (
    <div className="bg-neutral-700 w-full h-screen text-neutral-50 flex flex-col">
      <Head />
      <div className="flex-1 flex flex-row w-full">
        <InputPanel />
        <div className="w-full h-full">
          <FlowViewer />
        </div>
      </div>
    </div>
  );
}
export default App;
