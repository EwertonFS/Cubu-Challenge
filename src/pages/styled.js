import styled from 'styled-components'

export const MainContainer = styled.div`
display:flex
flex-direction:column;
justify-content: space-between;
margin:2%;
`
export const Title = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const FigureContainer = styled.div`
display:flex;
justify-content:espace-beteween;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
display:flex;
flex-direction:column;	
}


}
`