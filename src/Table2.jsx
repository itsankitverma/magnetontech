import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Second from "./json/tableChart.json";
import Buttons from "./Buttons";
function Chart1() {
  const [state, setstate] = useState({
    id: [],
    emailId: [],
    org: [],
    view: [],
    dataLimit: [],
    granularity:[],
    tzName:[],
    tzLoc:[],
    SdataRange:[],
    EdateRange:[],
    XAxis:[],
    YAxis:[],
  });

  function set() {
    // fetch("Table.json")
    //   .then(res => {
    //     if(res.ok){
    //       console.log("Successful");
    //     }
    //     else{
    //       console.log("Ünsuccessful");
    //     }
    //   })
    //   .then(result => console.log("result is : "+result))
      
    setstate({
      id: Second._id,
      emailId: Second.emailId,
      org: Second.orgViewReq.organization,
      view: Second.orgViewReq.view,
      dataLimit: Second.chartObject.metadata.dataLimit,
      granularity: Second.chartObject.requestParam.granularity,
      tzName: Second.chartObject.requestParam.timeZone.name,
      tzLoc: Second.chartObject.requestParam.timeZone.location,
      SdataRange: Second.chartObject.requestParam.dateRange.startDate,
      EdataRange: Second.chartObject.requestParam.dateRange.endDate,
      XAxis: Second.chartObject.requestParam.xAxis,
      YAxis: Second.chartObject.requestParam.yAxis,
    });
  }

  // console.log("Result is : ",First);

  return (
    <div className="table2">
      
      <Buttons onClick={() => {
          set();
        }} />
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Table"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "string", label: "Details" },
            { type: "number", label: "Value" },
          ],
          ["ID", { v: 10, f: state.id }],
          ["Email ID", { v: 11, f: state.emailId }],
          ["Organization", { v: 12, f: state.org }],
          ["View", { v: 13, f: state.view }],
          ["Granularity", { v: 13, f: state.granularity }],
          ["Timezone Name", { v: 13, f: state.tzName }],
          ["Timezone Location", { v: 13, f: state.tzLoc }],
          ["Start dateRange", { v: 13, f: state.SdataRange }],
          ["End dateRange", { v: 13, f: state.EdateRange }],
          ["XAxis", { v: 13, f: state.XAxis }],
          ["YAxis", { v: 13, f: state.YAxis }],
        ]}
        options={{
          showRowNumber: true,
        }}
      />
    </div>
  );
}

export default Chart1;
