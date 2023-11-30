"use client";

import styled from "styled-components";

export const FloatingAnimationStyled = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  text-align: center;

  .animation-heart {
    position: relative;
  }
  .animation-heart:before,
  .animation-heart:after {
    position: absolute;
    content: "";
    left: 18px;
    top: 0;
    width: 18px;
    height: 30px;
    background: #cc2022;
    -moz-border-radius: 20px 50% 0 0;
    border-radius: 30px 30px 0 0;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }
  .animation-heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .altheart {
    background: url(http://static.indigoimages.ca/2016/shop/113439_img25_twotoneheart.png)
      no-repeat center;
    width: 24px;
    height: 21px;
    position: relative;
    display: block;
  }

  .x1 {
    left: 5%;
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.6;
    z-index: 20;
    -webkit-animation: moveclouds 15s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    -moz-animation: moveclouds 15s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }

  .x2 {
    left: 25%;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.9;
    z-index: 20;

    -webkit-animation: moveclouds 25s linear infinite,
      sideWays 5s ease-in-out infinite alternate;
    -moz-animation: moveclouds 25s linear infinite,
      sideWays 5s ease-in-out infinite alternate;
  }
  .x3 {
    left: 55%;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8;
    -webkit-animation: moveclouds 20s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    -moz-animation: moveclouds 20s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }
  .x4 {
    left: 72%;
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.9;
    z-index: 20;

    -webkit-animation: moveclouds 18s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    -moz-animation: moveclouds 18s linear infinite,
      sideWays 0zs ease-in-out infinite alternate;
  }
  .x5 {
    left: 88%;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.3;
    z-index: 20;

    -webkit-animation: moveclouds 7s linear infinite,
      sideWays 1s ease-in-out infinite alternate;
    -moz-animation: moveclouds 7s linear infinite,
      sideWays 1s ease-in-out infinite alternate;
  }
  .x6 {
    left: 33%;
    opacity: 1;
    z-index: 20;
    -webkit-animation: moveclouds 2s linear infinite,
      swayWays 1s ease-in-out infinite alternate;
    animation: moveclouds 10s linear infinite,
      swayWays 9s ease-in-out infinite alternate;
  }

  @-webkit-keyframes moveclouds {
    0% {
      top: 500px;
    }
    100% {
      top: -500px;
    }
  }

  @keyframes moveclouds {
    0% {
      top: 500px;
    }
    100% {
      top: -500px;
    }
  }

  @-webkit-keyframes sideWays {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: 50px;
    }
  }

  @keyframes sideWays {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: 50px;
    }
  }

  @-keyframes swayWays {
    0% {
      transform: rotate(12deg);
      left: -0.3%;
    }
    33% {
      transform: rotate(-2deg);
      left: 0.7%;
    }
    100% {
      transform: rotate(0deg);
      left: -12%;
    }
  }
`;
