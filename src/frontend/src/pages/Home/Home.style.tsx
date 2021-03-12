import styled from 'styled-components/macro'
import { FullPage } from 'styles'

export const HomeStyled = styled.div`
  position: relative;
  background: white;
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
  > h1 {
    margin-bottom: 10px;
    color: red;
  }

  > a > button {
    margin-top: 20px;
    width: 160px;
  }

  span {
    font-size: 16px;
    display: block;
  }

  button:hover {
    transform: scale(1.05);
  }

  section.first {
    background-image: url('museum_exterior_1.svg');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 881px 684px;
    min-height: 108vh;
    z-index: 1;
    position: relative;
    margin-bottom: -200px;
    //margin-right: -60px;
    margin-top: 110px;
    z-index: 1;
    position: relative;

    .left {
      width: 50vw;
      padding-bottom: 5vw;
      h1 {
        font-weight: 900;
      }
      p {
        font-size: 24px;
        line-height: 36px;
        max-width: 600px !important;
      }
      button {
        margin-top: 50px;
        margin-left: 100px;
      }
    }
    .right {
    }
  }

  section.second {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('distortion-footer.svg');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 685px 147px;
    margin: 0 -5vw;

    .button--center {
      margin-top: -350px;
      margin-bottom: 350px;
    }

    h1 {
      width: 100%;
      text-align: center;
      padding-top: 333px;
      font-weight: 900;
    }
    background-color: #f2f2f2;
    height: 840px;

    .left {
      display: flex;
      flex-direction: row;

      p {
        padding: 40px;
      }
      img {
        width: 276px;
        height: 693px;

        margin-left: 50px;
      }
    }
  }

  section.third {
    h1 {
      text-align: center;
      margin-top: 170px;
      font-weight: 900;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 690px;
      width: 100%;
      margin: 0 auto;

      a {
        margin-top: 44px;
        text-align: center;
      }
    }

    .museum-interior {
      margin-bottom: -6px;
    }
  }

  footer.footer {
    background-color: #000000;
    height: 190px;
    margin: 0 -5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left {
      padding: 60px;
      p {
        color: white;
        font-size: 14px;
      }
    }
    .right {
      padding: 60px;
      margin-top: 14px;
      img {
        width: 32px;
        margin-left: 25px;
      }
    }
  }

  @media (max-width: 1200px) {
    section.first {
      background-size: 881px 684px;
      min-height: 770px;
    }

    section.second {
      .button--center {
        margin-top: calc(-18vw);
        margin-bottom: 350px;
      }
    }
  }

  @media (min-width: 1201px) {
    section.first {
      //height: 100vh;
      min-height: 888px;
      .left {
        width: 55vw;
        p {
          max-width: 51vw;
        }
        button {
          margin-left: 100px;
        }
        h1 {
          font-size: 72px;
          margin-top: 72px;
        }
      }
    }
  }

  @media (min-width: 1401px) {
    section.first {
      .left {
        width: 44vw;
        p {
          max-width: 44vw;
        }
        button {
          margin-left: 200px;
        }
        h1 {
          font-size: 72px;
          margin-top: 72px;
        }
      }
    }
  }

  @media (min-width: 1801px) {
    section.first {
      //height: 100vh;
      min-height: 888px;
      .left {
        width: 38vw;
        p {
          max-width: 38vw;
        }
        button {
          margin-left: 200px;
        }
        h1 {
          font-size: 72px;
          margin-top: 72px;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1111px) {
    section.first {
      background-size: 621px 598px;
      margin-top: -100px;
      .left {
        width: 66vw;
        &__header {
          margin-top: 60px;
        }
        p {
          max-width: 66vw;
        }
        button {
          margin-left: 100px;
        }
        h1 {
          //margin-top: 72px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    section.first {
      margin-top: 130px;
      margin-right: 0;
      background-size: 628px 601px;
      min-height: 1070px;
      padding: 0 20px;
      padding-left: 30px;

      .left {
        width: 88vw;
        padding-bottom: 5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-weight: 900;
        }
        p {
          font-size: 24px;
          line-height: 36px;
          max-width: 590px;
        }
        button {
          margin-top: 50px;
          margin-left: auto;
        }
      }
    }

    section.second {
      height: calc(100% + 250px);

      .button--center {
        margin-top: 0;
        margin-bottom: 200px;
      }

      .left {
        flex-direction: column;
        padding: 0;
        align-items: center;
        img {
          height: 88vh;
        }
        p {
          padding-bottom: 20px;
        }
      }

      h1 {
        padding-top: 155px;
      }
    }

    footer.footer {
      .right {
        padding: 0;
        padding-top: 10px;
        a {
          display: block;
          margin-bottom: 20px;
          padding-right: 35px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .section.second {
      .left {
        padding: 0;
      }
    }
    footer.footer {
      flex-direction: column-reverse;
      height: 200px;
      .right {
        display: inline-flex;
        padding-top: 42px;
        margin: 0 auto;
      }
      .left {
        padding-bottom: 20px;
        padding-top: 0;
        /* margin: 0 auto; */
        text-align: center;
      }
    }
  }
`
