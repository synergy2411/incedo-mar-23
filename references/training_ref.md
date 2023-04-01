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
