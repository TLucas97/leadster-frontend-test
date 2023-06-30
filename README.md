# Leadster Frontend Test

![leadster-logo](https://leadster.com.br/img/leadster/leadster.svg)

## Running with docker

To run this project using docker, you need to have [docker](https://www.docker.com/) installed. Once you have it installed, clone this repository and navigate to the project directory in your terminal. Then run:

```bash
  make build
```

This will install all the necessary dependencies required for this project. Once the installation is complete, run the following command to start the docker container:

```bash
  make run
```

The docker container server will be running at [http://localhost:3000/](http://localhost:3000/), where you can view the app in your browser.

## Local Development

To run this project locally, you need to have [Node](https://nodejs.org/) installed. Once you have it installed, clone this repository and navigate to the project directory in your terminal. Then run:

```bash
  make i
```

This will install all the necessary dependencies required for this project. Once the installation is complete, run the following command to start the development server:

```bash
  make dev
```
This will start a development server at [http://localhost:3000/](http://localhost:3000/), where you can view the app in your browser.


### Testing
You can run cypress tests with the following command:

```bash
  make cy
```

## Technologies Used

This project was built using the following technologies:

- **Next.js**: Next.js is a React framework for building server-side rendered and statically generated web applications.
- **Styled-components**: Styled-components is a CSS-in-JS library that allows you to write CSS styles directly in your JavaScript code.
- **GitHub Actions**: GitHub Actions is a continuous integration and deployment platform provided by GitHub. It allows you to automate your workflows and build/test/deploy your applications.
- **Docker**: Docker is a containerization platform that allows you to package your application and its dependencies into a lightweight, portable container.
- **TypeScript**: TypeScript is a statically-typed superset of JavaScript that adds optional types to the language. It helps catch errors and improve code quality.
- **React-animate-on-scroll**: React-animate-on-scroll is a library that provides scroll-based animations for React components. It allows you to animate elements as they come into the viewport during scrolling.
  
## Decision making during the project
- **styled-components usage**: I decided to use styled components as required and decided to create a theme for the whole app for a future change case scenario on the app.
```javascript
export function defineTheme(theme: string) {
  const themes: any = {
    leadster: {
      primary: {
        100: "#F1F8FE",
        200: "#0183FE",
        300: "#C3ECFE",
        400: "#A0D8FF",
      },
      // following colors
    },
    dark: {
      primary: {
        100: "#1C1C1C",
        200: "#2F2F2F",
        300: "#4F4F4F",
        400: "#828282",
      },
      // following colors
    }
  }

  return themes[theme];
}
```
- **Typescript usage**: All the components are typed and use a format "interface/index/styled" to make sure its easy to update it when needed, it also uses the color pallete as base.

![folder-files-example](https://res.cloudinary.com/domwy2hmn/image/upload/v1688160709/Screenshot_20230630_183122_sf0aeq.png)

- **Docker usage**: I used Docker to ensure consistentency, portability and scalability of the app.
- **Github actions**: I used it with cypress to automatically run the e2e tests and make sure everything is working accordingly


## Project Link

You can also view the deployed version of this app at [leadster-frontend-test.vercel.app](https://leadster-frontend-test.vercel.app/).
