import Head from "./components/Head";
import FlowViewer from "./components/FlowViewer";
import "./index.css";

function App() {
  return (
    <div className="bg-neutral-700 w-full h-screen text-neutral-50">
      <Head />
      <FlowViewer />
    </div>
  );
}

export default App;
