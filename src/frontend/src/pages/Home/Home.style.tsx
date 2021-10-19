import styled from 'styled-components/macro'

import { backgroundColorBody, FullPage, near3, subTextColor, textColor, textColorWhite } from 'styles'

export const HomeStyled = styled.div`
  position: relative;
  background: ${backgroundColorBody};
  padding-top: 90px;
  > img {
    position: absolute;
    top: calc(33vh - 130px);
    left: 0;
    width: 100%;
    z-index: -1;
  }
`

export const Footer = styled.footer`
  background-color: #000000;
  /* height: 190px; */
  /* margin: 0 -5vw; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  .left {
    padding: 25px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
      color: white;
      font-size: 14px;
    }
    img {
      width: 265px;
      margin-bottom: 50px;
    }
  }
  .center {
    display: flex;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: 480px) {
        padding: 0;
        align-items: center;
      }

      p {
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #00c1de;
        margin-bottom: 15px;
      }
      li {
        margin-bottom: 15px;
        a {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
  .right {
    padding: 60px;
    /* margin-top: 14px; */
    display: flex;
    align-items: center;
    img {
      width: 32px;
      margin-left: 25px;
    }
  }

  .socials {
    display: flex;
    align-items: center;
  }

  .links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 10px;
    margin-right: 30px;
  }

  .link {
    color: #fff;
  }

  .footer-wrapper {
    width: 90vw;
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    .right {
      flex-direction: column;
    }

    .socials {
      margin-top: 10px;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 800px) {
    .footer-wrapper {
      flex-direction: column;
    }

    .left {
      padding: 60px 60px 10px;
    }

    .right {
      padding: 10px 10px 60px;
    }

    .links {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
    }
  }
`

export const HomePage = styled(FullPage)``

export const HomeContainer = styled.div`
  section.main {
    /* background-image: url('/images/museum_exterior_1.svg'); */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 800px;
    margin-top: 70px;
    z-index: 1;

    .left {
      position: relative;
      height: 100%;
      width: 100%;
      margin-right: 30px;
      padding-top: 90px;
      /* border: 1px solid black; */
      background-image: url('/images/main_section/perso_03.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 487.5px 502px;

      .img_as,
      .img_inf,
      .img_r,
      .rec_1,
      .rec_2,
      .rec_3,
      .rec_4,
      .rec_5,
      .rec_6 {
        position: absolute;
      }

      .rec {
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 0 5px 10px #FFFFFF;
      }

      .img_as {
        top: 0;
        right: 130px;
      }

      .img_inf {
        top: 100px;
        right: 25px;
      }

      .img_r {
        top: 270px;
        right: 14px;
      }

      .rec_1 {
        left: 117px;
        top: 287px;
        width: 64px;
        height: 64px;
        transform: rotate(-15deg);
      }

      .rec_2 {
        left: 117px;
        top: 440px;
        width: 56.73px;
        height: 56.73px;
        transform: rotate(3.03deg);
      }

      .rec_3 {
        left: 25px;
        top: 557px;
        width: 76.37px;
        height: 76.37px;
        transform: rotate(8.24deg);
      }
    
      .rec_4 {
        left: 183px;
        top: 638px;
        width: 42.88px;
        height: 42.88px;
        transform: rotate(-25.11deg);
      }

      .rec_5 {
        left: 65px;
        top: 708px;
        width: 57.3px;
        height: 57.3px;
        transform: rotate(5.2deg);
      }

      .rec_6 {
        left: 293px;
        top: 717px;
        width: 57.3px;
        height: 57.3px;
        transform: rotate(-14.47deg);
      }
    }

    .right {
      max-width: 762px;
      .title {
        .title_sub {
          font-weight: bold;
          font-size: 38px;
          color: ${subTextColor};
        }

        .title_bg {
          color: ${near3};
          font-weight: bold;
          font-size: 60px;
          line-height: 115.5%;
        }
      }

      .text {
        font-size: 21px;
        line-height: 32px;
        color: ${textColor};

        & + .text {
          margin-top: 20px;
          margin-bottom: 53px;
        }
      }

      .get-started { 
        display: flex;
        align-items: center;
        
        button {
          max-width: 220px;
          font-weight: 600;
          font-size: 22px;
          line-height: 33px;
          height: 60px;
          padding: 0px 20px; 
          margin-right: 20px;
        }
      }
    }
  }

  .wrapp_card {
    margin-top: 76px;
    width: 100%;
    height: 285px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 25px 50px rgba(65, 41, 116, 0.1);
    border-radius: 15px;

    .card_items {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .card_title {
        font-weight: bold;
        font-size: 30px;
        line-height: 45px;
        color: ${subTextColor};
        max-width: 239px;
        width: 100%;
      }

      .card_item {
        max-width: 304px;
        width: 100%;
      }

      .card_item-title {
        display: flex;
        align-items: center;

        .box-img {
          margin-right: 16px;
        }

        .title {
          font-weight: bold;
          font-size: 24px;
          line-height: 36px;
          color: ${subTextColor};
        }
      }

      .card_item-text {
        margin-top: 20px;
        font-size: 21px;
        line-height: 32px;
        color: ${textColor};
      }
    }
  }

  section.second {
    margin-top: 127px;
    background-image: url('/images/freeCourse/free_course_bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-color: ${subTextColor};
    border-radius: 25px;
    min-height: 1005px;
    position: relative;

    .img {
      position: absolute;

      &.img_top-left {
        top: 40px;
        left: 40px;
      }

      &.img_bottom-left {
        bottom: -7px;
        left: 0;

        img {
          border-bottom-left-radius: 25px;
        }
      }

      &.img_bottom-right {
        bottom: -7px;
        right: 0;

        img {
          border-bottom-right-radius: 25px;
        }
      }
    }

    .wrapp {
      max-width: 908px;
      width: 100%;
      margin: 0 auto;
      color: ${textColorWhite};

      .second-title {
        width: 100%;
        text-align: center;
        margin-top: 74px;
        margin-bottom: 50px;
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;
      }

      .box-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 50px;
        border-bottom: 2px solid rgba(256, 256, 256, .3);

        .box-img {
          position: relative;

          .version {
            position: absolute;
            top: 0;
            right: -30px;
            font-weight: 500;
            font-size: 23px;
            line-height: 34px;
          }
        }

        .text {
          max-width: 500px;
          font-weight: 500;
          font-size: 22px;
          line-height: 33px;
        }
      }

      .box-bottom {
        margin-top: 43px;
        display: flex;
        justify-content: space-between;

        .description {
          font-family: 'DM Mono', monospace;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 133%;
          max-width: 620px;

          .paragraph + .paragraph {
            margin-top: 30px;
          }
        }

        .course-specs {
          max-width: 258px;
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          padding: 17px 18px 24px;
          border: 2px solid #C7D2FE;
          box-sizing: border-box;
          border-radius: 10px;
          max-height: 202px;

          .course-specs_title {
            font-weight: bold;
            font-size: 20px;
            line-height: 30px;
            margin: 12px;
          }

          .course-specs_options {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .option_name {
              width: 100px;
              margin-right: 20px;
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;
              color: #C7D2FE;
              opacity: 0.7;
            }

            .option-value {

            }
          }
        }
      }
      .btnContainer {
        margin-top: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        .boxArrow {
          background-image: url('/images/freeCourse/arrow_right.png');
          background-repeat: no-repeat;
          background-position: center center;
          width: 62px;
          height: 40px;
          margin-right: 25px;
        }

        button {
          padding: 19px 34px;
          font-size: 21px;
          line-height: 31px;
        }
      }
    }
  }

  section.third {
    .wrapp {
      margin-top: 136px;

      .third-title {
        display: block;
        font-weight: bold;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: ${subTextColor};
      }

      .box-items {
        margin: 75px auto 114px;
        max-width: 1100px;
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */

        .item {
          max-width: 890px;
          display: flex;
          align-items: center;
          & + .item {
            margin-top: 113px;
          }

          &.middle {
            margin-left: 238px;
          }

          .item-img_fire {
            background-image: url('/images/learn_section/fire.png');
            background-repeat: no-repeat;
            background-position: center center;
            width: 238px;
            height: 238px;
          }
          .item-img_compass {
            background-image: url('/images/learn_section/compass.png');
            background-repeat: no-repeat;
            background-position: center center;
            width: 207px;
            height: 207px;
          }
          .item-img_rocket {
            background-image: url('/images/learn_section/rocket.png');
            background-repeat: no-repeat;
            background-position: center center;
            width: 203px;
            height: 203px;
          }

          .item-description {
            max-width: 628px;
            width: 100%;

            .item-title {
              font-weight: bold;
              font-size: 24px;
              line-height: 36px;
              color: ${subTextColor};
            }
            .item-text {
              font-size: 21px;
              line-height: 32px;
              color: ${textColor};
            }
          }
        }
      }
    }
  }

  /* section.third {
    h1 {
      text-align: center;
      margin-top: 90px;
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
  } */
  /* section.second {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('distortion-footer.svg');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 685px 147px;
    margin: 0 -5vw;
    height: 650px;
    position: relative;

    .paragraph {
      max-width: 690px;
    }

    h1 {
      width: 100%;
      text-align: center;
      padding-top: 10px;
      font-weight: 900;
    }
    background-color: #f2f2f2;

    .left {
      display: flex;
      flex-direction: row;

      p {
        padding: 10px 0px;
      }
      img {
        height: 693px;
        min-width: 276px;
        width: 276px;
        margin-left: 50px;
        position: absolute;
        left: 0px;
      }
    }
  } */

  /* section.benefits {
    padding: 200px 0px 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      width: 100%;
      margin: 0px 0px 40px;
      font-weight: 900;
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0;
      padding: 0 200px;
      margin-bottom: 75px;

      @media (max-width: 992px) {
        flex-wrap: wrap;
        padding: 0px;
        margin-bottom: 10px;
      }

      li {
        width: 30%;
        list-style-type: none;
        box-shadow: 0px 0px 68px 0px rgba(190, 179, 194, 0.6);
        padding: 20px;
        border-radius: 22px;

        @media (max-width: 992px) {
          width: 32%;
          margin-bottom: 20px;
        }

        @media (max-width: 680px) {
          width: 45%;
        }

        @media (max-width: 460px) {
          width: 100%;
        }

        .icon {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px auto 30px;
          border-radius: 100%;

          &.first {
            background: rgba(134, 24, 251, 0.2);
          }
          &.second {
            background: rgba(251, 120, 24, 0.2);
          }
          &.third {
            background: rgba(251, 31, 24, 0.2);
          }
          &.last {
            background: rgba(24, 251, 45, 0.2);
          }
          img {
            width: 30%;
          }
        }

        h2 {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin: 10px 0px 20px;
        }
        .description {
          font-size: 16px;
        }
      }
    }
  } */


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
      background-position: right -90px bottom 0;
      min-height: 770px;
    }

    section.second {
      .button--center {
        margin-bottom: 350px;
      }
    }
    section.second {
      h1 {
        margin-top: 190px;
      }
    }
  }

  @media (min-width: 1201px) {
    section.first {
      //height: 100vh;
      min-height: 800px;
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
          font-size: 68px;
          margin-top: 72px;
        }
      }
    }
  }

  @media (min-width: 1801px) {
    section.first {
      //height: 100vh;

      min-height: 800px;
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

  /* @media (min-height: 769px) and (max-width: 940px) {
    .left {
      display: flex;
      flex-direction: column;
    }
  } */

  @media (min-width: 1024px) {
    p {
      text-align: justify;
    }
  }

  @media (max-width: 768px) {
    section.first {
      margin-top: 130px;
      margin-right: 0;
      background-size: 628px 601px;
      min-height: 1070px;
      padding: 0 20px;
      /* padding-left: 30px; */

      .left:not(button) {
        width: 87vw;
        /* width: 100%; */
        padding-bottom: 5vw;
        display: flex;
        flex-direction: column;

        h1 {
          font-weight: 900;
        }

        p {
          font-size: 24px;
          line-height: 36px;
          max-width: 590px;
          text-align: left;
        }
        button {
          display: flex;
          margin: 50px auto 0 auto;
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
          padding-right: 60px;
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
