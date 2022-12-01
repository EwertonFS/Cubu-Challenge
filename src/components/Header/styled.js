import styled from "styled-components"
import { primary_color } from "../../constants/constants"


export const ContainerHeader= styled.div`
display:flex;
flex-direction:row;
background-color:${primary_color};
justify-content: space-evenly;
padding:3vh;
height:6vh;
width:100%;

input{
    background-color:white;
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px){
    padding:5px;
    display:flex;
    flex-direction:row;
    height:5%;
    width:100%;
}
`

export const ContainerForm = styled.div`
display:flex;
flex-direction:left;
align-items:left;
justify-content: space-around;



`










export const TitleHeader= styled.div`
align-items:left;
justify-content:left;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display:none;
}

`

export const InputName= styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin:1%;
    
}

`

export const InputLastName= styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin:1%;
}
`

export const InputParticipation= styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin:1%;
}

`
export const ButtonGo= styled.div`

@media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin-top:2%; 
}
`
// export const ContainerForm= styled.div`
// display:flex;
// flex-direction:row;
// justify-content: space-beteween;

// `
