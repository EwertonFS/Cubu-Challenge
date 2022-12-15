import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { ContextApi } from "../../context";
import { ChartContainer} from "./styled";


// lib para trabalhar com gráfico tratar dado https://lodash.com/ 

// const data = [
//   ["name", "porcentagem"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7], // CSS-style declaration
// ];


export const options = {
  title: "Participation",
  pieHole: 0.4,
  is3D: false,
};

export const Graphic = () => {
   
//trazer o row 
const shareholder = React.useContext(ContextApi)

//https://www.youtube.com/watch?v=yQcNA41PMco
// revisar java script
// transformar objeto na config objeto do array iterar
// const objetcToArray= (Object)=>{
//   let result =[]
//   for(key of Object.keys(Object)){
//     result.push([key],)
//   }
// }

//talvez fazer uma map
//juntar dois arrays e transformar em um elemento para ficar na mesma sintaze da lib // x + " "+ y
// 
// const muda Object.keys(rows) =>
//  rows[0].name +" "+rows[0].lastName *concateno objeto 
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
  
  // const data = arrayToObject(teste)
  
 

// let arrIndice= Object.keys(rows)
// console.log(arrIndice)
// let arrValues = Object.values(rows)
// console.log(arrValues)

// let dataBase = []

// for(let i=0;1<arrValues[0].length;i++){
//     dataBase[i] = arrValues.map((item)=>{
//         return item[i]
//     })
// }


// dataBase.unshift(arrIndice)

// console.log(dataBase)





  // function objectToArray(object) {
  //   let result = [];
  //   for (key of Object.keys(object)) {
  //     result.push(key, object[key]);
  //   }
  //   return result;
  // }

  // const test3 = objectToArray(teste)
  // const result = [
  //   ["name", "porcentagem"]
  //   [teste]

  // ]  
    
    
  

  
 
  // nome.forEach((Element)=>console.log(Element))
  // participacao.forEach((Element1)=>console.log(Element1))

//1- Driando elementos no formato correto
//agora criar loop 
//quero que nome e numero se repita no para cada array indice do array sucessivamente ate   ultima posicao do array
// relacionar com objeto data ou trasformar com o objeto data
//nome.forEach((Element)=>console.log(Element))

const data = [
  ["name", "porcentagem"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

// useEffect(()=>{
//   const [chartData,setChartData] = useState(rows)

//   const loadData = () => {

//   }
// },[])

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

