import { keyframes } from "styled-components";

export const closeButton = {
  top: keyframes`
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(0) translateY(60px);
    }
    100% {
      transform: rotate(45deg) translate(30%, 22px);
    }
  `,
  mid: keyframes`
    50% {
      transform: scale(0);
    }

    100% {
        transform: scale(0);
    }
  `,
  bot: keyframes`
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(0) translateY(-60px);
    }
    100% {
      transform: rotate(135deg) translate(-30%, 22px);
    }
  `
}

export const openButton = {
  top: keyframes`
    0% {
      transform: rotate(45deg) translate(30%, 22px);
    }
    50% {
      transform: rotate(0) translateY(60px);
    }
    100% {
      transform: rotate(0);
    }
  `,
  mid: keyframes`
    0%{
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `,
  bot: keyframes`
    0% {
      transform: rotate(135deg) translate(-30%, 22px);
    }
    50% {
      transform: rotate(0) translateY(-60px);
    }
    100% {
      transform: rotate(0);
    }
  `
}