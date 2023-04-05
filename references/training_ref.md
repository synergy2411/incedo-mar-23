# Atomic Design in Web World

- Atom : a button, one input field etc
- Molecules : comb of Atoms eg. search bar -> one input filed + one Button
- Organism : combo of molecules eg. navigation bar -> various links + Serach Bar + brand name
- Template : combo of organism eg. Form -> personal details, professional details, emp record etc
- Page : combo of various templates eg. web page

# Thinking in React way -

## If the code is reusable, make it a component.

# npx create-react-app first-app

- cd first-app
- npm run start

# JSX Restrictions

- JSX must have only one root element
- JSX can't have Javscript reserved keywords eg. class

# npm install bootstrap

# Props

- are used for supplying the data from parent to child component
- when we want to supply the data from child to parent, we use functional props (Lifting up the state)

# useEffect Flavours

- useEffect(cb) : cb will run at initial rendering of component as well as for every sub-sequent re-rendering
- useEffect(cb, []) - componentDidMount: cb will run at initial rendering of component ONLY
- useEffect(cb, [Dependencies]) - componentDidUpdate : cb will run at initial rendering of component and whenever the mentioned dependencies will change.
- useEffect(cb => cleanUpFn, [Dependencies]) :
  > cb will run at initial rendering of component
  > before the callback is fired, the Cleanup will fire.
  > cb will run whenever the mentioned dependencies will change
  > cleanUp will also fire when the component is about to destory (componentWillUnmount)

# Memorization : to remember

# Memoization : to store

# Context API solves the problem of Prop drilling

- Prop drilling is sending the props to all the level in component branch
- Context API is NOT highly optimized for data which is frequently changing/ huge amount of data

# State Management

- Component Level : useState(), this.state
- Component Branch Level : Context API / Redux Pattern
- App Level : Redux Pattern

function xyz(prevState, action){
return nextState;
}

(prevState, action) => nextState

store = {
counter : 0,
result : []

}

# npm i @reduxjs/toolkit react-redux

# SPA (Single Page Application)

- There will be one and only one page will be rendered.
- Rendered Page will not reload / refresh in the browser.
- Content of the single page will change dynamically.
- Complete App is rendered on the browser in one go.

# npm i react-router-dom

- Configure BrowserRouter for React App
- Configure the Components according to the Routes
