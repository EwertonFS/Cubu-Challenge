import styled from "styled-components"
import { primary_color } from "../../constants/constants"


export const ContainerHeader= styled.div`
display:flex;
flex-direction:row;
background-color:${primary_color};
justify-content: space-around;
padding:3vh;
height:5%;

input{
    background-color:white;
    // margin:0px 5px 0 5px;
}
}

`

export const ContainerForm= styled.div`
display:flex;
flex-direction:row;
justify-content: space-beteween;

`
