import styled from 'styled-components/macro'


export const PopupStyle = styled.div`
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    
    .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        position: absolute;
        width: 100%;
        bottom: 0;
        
        button {
            height: 40px;
        }
    }
`

export const PopupWrapper = styled.div`
    border-radius: 22px;
    box-shadow: 0px 0px 49px -17px rgb(0 0 0 / 62%);
    background: #fff;
    max-height: 530px;
    min-height: 200px;
    position: relative;
    width: 600px;
    height: 100%;
`

export const PopupTitle = styled.h2`
    padding: 20px;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #00C08B;
    text-align: center;
`

export const PopupText = styled.p`
    padding: 20px;
    font-size: 24px;
    text-align: center;
`

export const PopupImage = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
