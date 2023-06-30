"use client";

import { styled } from "styled-components";
import { defineTheme } from "../../utils/global-colors";

const colors = defineTheme("leadster");

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

        @media (max-width: 500px) {
          font-size: 1.5rem;
          text-align: center;
        }

        @media (max-width: 380px) {
          font-size: 1rem;
        }
      }

      .highlight-text-box {
        position: relative;
        height: 100px;
        padding: 0 1.2em;

        @media (max-width: 450px) {
          height: 150px;
        }

        h1 {
          font-size: 4.2rem;
          color: ${colors.primary[200]};
          margin-bottom: 0.1em;

          @media (max-width: 600px) {
            font-size: 3.5rem;
            text-align: center;
          }

          @media (max-width: 380px) {
            font-size: 2.5rem;
          }
        }

        div {
          position: absolute;
          top: 0.2em;
          right: 0;

          .leadster-icon-img {
            @media (max-width: 380px) {
              width: 30px;
            }
          }

          @media (max-width: 600px) {
            top: 0;
          }

          @media (max-width: 450px) {
            top: 4.2em;
            right: 10%;
          }

          @media (max-width: 380px) {
            top: 0;
            right: 0;
          }

          @media (max-width: 330px) {
            top: 3.3em;
            right: 3em;
          }

          @media (max-width: 300px) {
            top: 3.3em;
            right: 1.1em;
          }
        }
      }

      .line-size {
        width: 550px;

        @media (max-width: 550px) {
          width: 100%;
        }
      }

      p {
        color: ${colors.dark[200]};

        @media (max-width: 500px) {
          text-align: center;
        }

        @media (max-width: 380px) {
          font-size: 1rem;
        }
      }
    }

    .videos-area {
      width: 980px;
      margin: 0 auto;
      margin-top: 3.5em;
      padding-bottom: 4em;

      @media (max-width: 1080px) {
        width: 100%;
      }

      .videos-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;

        @media (max-width: 1080px) {
          padding: 0 1em;
        }

        @media (max-width: 420px) {
          flex-direction: column;
          gap: 1em;
          height: 120px;
        }

        .header-options {
          display: flex;
          gap: 0.8em;

          @media (max-width: 980px) {
            display: none;
          }
        }

        .menu-btn {
          display: none;

          @media (max-width: 980px) {
            display: flex;
          }
        }

        .select-area {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1em;

          @media (max-width: 360px) {
            flex-direction: column;
          }
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

        @media (max-width: 320px) {
          div {
            width: 100%;
          }
        }

        @media (max-width: 1080px) {
          justify-content: space-evenly;
        }
      }

      .videos-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;

        @media (max-width: 380px) {
          flex-direction: column;
        }
      }
    }

    .leads-area {
      width: 100%;
      height: 730px;
      background-color: ${colors.primary[100]};
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1495px) {
        flex-direction: column;
        gap: 1em;
        height: 1180px;
      }

      @media (max-width: 1080px) {
        flex-direction: column;
        height: 980px;
      }

      @media (max-width: 600px) {
        flex-direction: column;
        height: 775px;
      }

      .img-area {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media (max-width: 1495px) {
          width: 100%;
          justify-content: center;

          img {
            width: 50%;
          }
        }

        @media (max-width: 480px) {
          img {
            width: 70%;
          }
        }

        @media (max-width: 360px) {
          img {
            width: 90%;
          }
        }
      }

      .text-area {
        width: 50%;
        padding-left: 5em;

        @media (max-width: 1495px) {
          width: 100%;
          padding-left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .text-card {
          width: 600px;
          height: 400px;

          @media (max-width: 1495px) {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          h1 {
            font-weight: 400;
            color: ${colors.dark[200]};
            max-width: 350px;
            font-size: 2rem;

            @media (max-width: 1495px) {
              text-align: center;
            }

            @media (max-width: 380px) {
              font-size: 1.5rem;
            }
          }

          p {
            margin-top: 0.5em;
            color: ${colors.dark[200]};
          }

          .demonstration {
            display: flex;
            height: 55px;
            gap: 1em;

            @media (max-width: 580px) {
              flex-direction: column;
              gap: 1em;
              height: 200px;

              .line-separator-small {
                display: none;
              }
            }
          }

          .card-review-area {
            margin-top: 0.8em;
            display: flex;
            gap: 0.5em;
            font-weight: 500;
            color: ${colors.dark[200]};

            @media (max-width: 580px) {
              flex-direction: column;
              gap: 1em;

              .line-separator-small {
                display: none;
              }
            }

            div {
              display: flex;
              gap: 0.5em;
              align-items: center;

              @media (max-width: 580px) {
                flex-direction: column;
              }
            }
          }
        }
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }

    /* animation */
    .spin {
      animation: spin 1s linear infinite;
    }
  }
`;
