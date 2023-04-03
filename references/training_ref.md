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
