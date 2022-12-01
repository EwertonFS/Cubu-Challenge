import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import { ContextApi } from "../../context";
import { ChartContainer} from "./styled";




const data = [
  ["name", "porcentagem"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];


export const options = {
  title: "Participation",
  pieHole: 0.4,
  is3D: false,
};

export const Graphic = () => {
   
//trazer o row 
const rows = React.useContext(ContextApi)

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
//Object.keys(rows) => acesso todo objeto
 //rows[0].name +" "+rows[0].lastName *concateno objeto 

const dice = [  
  ["Name", "Porcentagem"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7]
  ]
  

  return (
    <ChartContainer>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={dice}
      options={options}
    />
    </ChartContainer>
    );
}

