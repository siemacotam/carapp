import React from "react";
import  Mapa  from "../siema";
import SortPanel from "../SortPanel";

const Main = ({markers, data, setFilterOption, filterOption }) => {
  return <main>
    <SortPanel data={data} setFilterOption={setFilterOption}  filterOption={filterOption} />
    <div className="mapWrapper">
         <Mapa markers={markers} data={data}/>
       </div>
  </main>;
};

export default Main;
