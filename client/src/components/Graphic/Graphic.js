import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { ContextApi } from "../../context";
import { ChartContainer} from "./styled";



export const options = {
  title: "Participation",
  pieHole: 0.4,
  is3D: false,
};

export const Graphic = () => {
   
//trazer o row 
const shareholder = React.useContext(ContextApi)


// 
  const nome  = shareholder.map((row)=>{
  return [[row.name +" " + row.lastName]]
  }).toString()


 
  const participacao = shareholder.map((row)=>{
  return [[row.participation]]
  })

  //mais proximo ate o momento
  const teste = shareholder.map((row)=>{
   return  [ `${row.name +" " + row.lastName}`, row.participation]
  })
  //acrescentar array 
  const nova = teste.unshift(["name","porcentagem"])
    console.log(nova)
  
  console.log(teste)

  function arrayToObject(array) { 
    let result = {};
    for (const element of array) {
      result[element[0]] = [element[0][1]];
    }
    return result;
  } 
  
  

const data = [
  ["name", "porcentagem"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];



  return (
    <ChartContainer>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={teste}
      options={options}
    />
    </ChartContainer>
    );
}

