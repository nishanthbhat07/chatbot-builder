# Chatbot Flow Builder

## Setup

1. Clone the repo: `git clone https://github.com/nishanthbhat07/chatbot-builder.git`
2. After cloning the repo, `cd chatbot-builder` and install node_modules by using the following command
   `yarn`
3. After installing node_modules, to run the application run the following command:
   `yarn dev`

## Notes

- The project is deployed on vercel. [Chatbot Builder](https://chatbot-builder-red.vercel.app/)
- Project is setup using Vite
- Project uses the following dependencies
  - React Flow - For building the flow builder
  - React Draggable - for making draggable components
  - TailwindCSS - For styling components
  - React Context - For State Management

## Improvements for future

1. Implement draggable from stratch instead of React draggable
2. Instead of managing the nodes state in react context, use `ReactFlowProvider` that also internally manages the state so that data of nodes can be shared with components.
3. Support themeing. As the project is integrated with TailwindCSS themeing can be easily done.
4. Making the webpage responsive. For now it supports' DWeb only.
