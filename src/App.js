import "./App.css";
// import Chart1 from "./Chart1";
// import Table2 from "./Table2";
import DatePicker from "./DatePicker";
import Pie from "./pie";
// import Trial from "../src/Trial";

function App() {
  return (
    <>
      <div className="blocks">
        <h4>Data Analytics Application Dashboard</h4>
        {/* <Chart1 chartType="Table"/>
        <Table2 />
        <Pie /> */}
        <DatePicker />
      </div>
    </>
  );
}

export default App;
