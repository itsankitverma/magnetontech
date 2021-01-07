import "./App.css";
import Chart1 from "./Chart1";
import Table2 from "./Table2";
import Pie from "./pie";
function App() {
  return (
    <>
      <div className="blocks">
        <h4>Data Analytics Application Dashboard</h4>
        <Chart1 chartType="Table"/>
        <Table2 />
        <Pie />
      </div>
    </>
  );
}

export default App;
