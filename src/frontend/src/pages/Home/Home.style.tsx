import styled from 'styled-components/macro'
import { FullPage } from 'styles'

export const HomeStyled = styled.div`
  position: relative;

  > img {
    position: absolute;
    top: calc(33vh - 130px);
    left: 0;
    width: 100%;
    z-index: -1;
  }
`

export const HomePage = styled(FullPage)``

export const HomeContainer = styled.div`
  //width: 590px;
  margin-top: calc(30vh - 130px);

  > h1 {
    margin-bottom: 10px;
  }

  > a > button {
    margin-top: 20px;
    width: 160px;
  }

  span {
    font-size: 16px;
    display: block;
  }
  
  section.first {
    background-image: url('museum_exterior_animated.svg');
    background-position: right bottom; 
    background-repeat: no-repeat; 
    background-size: 949px 684px;
    min-height: 660px;
    z-index: 1;
    position: relative;
    margin-bottom: -190px;
    margin-right: -60px;
    margin-top: 160px;
    z-index: 1;
    position: relative;
    

    
    .left {
      width: 50vw;
      padding: 5vw;
    }
    
    
    .right {
      img {
        width: 0;
      }
    }
  }
  
  section.second {
  
    background-image: url("distortion-footer.svg");
    background-position: right bottom; 
    background-repeat: no-repeat; 
    background-size: 685px 147px;
    margin: 0 -70px;
    
  
    h1 {
      width: 100%;
      text-align: center;
      padding-top: 120px;
    }
    background-color: #f2f2f2;
    height: 840px;
  
    .left {
      display: flex;
      flex-direction: row;
      img {
        width: 276px;
        height: 693px;
 
        margin-left: 50px;
      }
    }
  }
  
  footer {
    background-color: black;
    height: 190px;
    .right {
      img {
        width: 32px;
        margin-left: 5px;
      
      }
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`
