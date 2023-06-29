"use client";

import { styled } from "styled-components";
import { colors } from "../../../../global-colors";

export const AppWrapperContainerStyles = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${colors.white[100]};

  .view {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: ${colors.white[100]};

    .banner-area {
      width: 100%;
      height: 550px;
      background-color: ${colors.primary[100]};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h2 {
        font-weight: 500;
        font-size: 2rem;
        color: ${colors.dark[200]};
      }

      h1 {
        font-size: 4.2rem;
        color: ${colors.primary[200]};
        margin-bottom: 0.1em;
      }

      .line-size {
        width: 550px;
      }

      p {
        color: ${colors.dark[200]};
      }
    }

    .videos-area {
      width: 980px;
      margin: 0 auto;
      margin-top: 3.5em;
      padding-bottom: 4em;

      .videos-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;

        .header-options {
          display: flex;
          gap: 0.8em;
        }

        .select-area {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1em;
        }
      }

      .videos-content {
        width: 100%;
        margin-top: 2.5em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        gap: 1em;
      }

      .videos-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
      }
    }

    .leads-area {
      width: 100%;
      height: 730px;
      background-color: ${colors.primary[100]};
      display: flex;
      align-items: center;
      justify-content: center;

      .img-area {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .text-area {
        width: 50%;
        padding-left: 5em;

        .text-card {
          width: 600px;
          height: 400px;

          h1 {
            font-weight: 400;
            color: ${colors.dark[200]};
            max-width: 350px;
            font-size: 2rem;
          }

          p {
            margin-top: 0.5em;
            color: ${colors.dark[200]};
          }

          .demonstration {
            display: flex;
            height: 55px;
            gap: 1em;
          }

          .card-review-area {
            margin-top: 0.8em;
            display: flex;
            gap: 0.5em;
            font-weight: 500;
            color: ${colors.dark[200]};

            div {
              display: flex;
              gap: 0.5em;
              align-items: center;
            }
          }
        }
      }
    }
  }
`;
