import styled from "styled-components"
import { primary_color } from "../../constants/constants"


export const ContainerHeader= styled.div`
display:flex;
flex-direction:row;

background-color:${primary_color};
// justify-content: space-between;
padding:3vh;
height:6vh;
width:100%vh;

input{
    background-color:white;
    display:flex;
    
   
    
   
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px){
    padding:5px;
    display:flex;
    flex-direction:row;
    height:5%;
    width:100%;
}
`

export const ContainerForm = styled.form`

display:flex;
flex-direction:row;
flex-wrap: nowrap;
align-items:center;
justify-content: space-around;
width:100%;


`

export const Name = styled.div`
width:20%;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin:1%;
`
export const LastName = styled.div`
width:20%;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin:1%;
`
export const Participation = styled.div`
width:20%;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin:1%;
`







export const TitleHeader= styled.div`
align-items:left;
justify-content:left;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display:none;
}

`

export const ButtonGo= styled.div`

@media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin-top:2%; 
}
`
export const InputName= styled.div`

    
}

`

export const InputLastName= styled.div`

}
`

export const InputParticipation= styled.div`

}

`
// export const ContainerForm= styled.div`
// display:flex;
// flex-direction:row;
// justify-content: space-beteween;

// `
