Light-form
=========================
> Lightweight library for boilerplate-free React/Redux forms

[![CircleCI](https://circleci.com/gh/j0nas/light-form/tree/master.svg?style=shield)](https://circleci.com/gh/j0nas/light-form/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/j0nas/light-form/badge.svg)](https://coveralls.io/github/j0nas/light-form)

**light-form** is a lightweight library that lets you create boilerplate-free React/Redux.

Check out the [live demo][surge] and the [examples]. 

## Installation
```
npm install --save light-form  
```

## Example
```jsx harmony
// CustomerForm.jsx
import React from 'react';
import {Input} from 'light-form';

const CustomerForm = () =>
  <div>
    <Input name="customer.firstname" />
    <Input name="customer.lastname" />
  </div>;
    
export default CustomerForm;
```

Import `Reducer` and pass it the name which you alias the reducer to. This should be the same
as the first part of the dot-delimited `name` property for the fields in your form.
Then add the reducer to your store setup (eg. using ``combineReducers``).
```jsx harmony
// rootReducer.js
import {combineReducers} from 'redux';
import {Reducer} from 'light-form';

const rootReducer = combineReducers({
  customer: Reducer('customer'),
  // .. other reducers
});

export default rootReducer;
```

## Quick start
**light-form** only requires four simple steps to get started:
* in your view, `import {Input, Select, TextArea} from "light-form";`
* pass the components a `name` prop in the form of `[formName].[fieldName]`
  * (eg. `<Input name="myForm.myField" />`)
* in your root reducer, `import {Reducer} from "light-form";` 
* pass it `[formName]` and add it to your store under the same name  
  * (eg. `combineReducers({ myForm: Reducer('myForm'), ... })`)

And that's it, your form is ready!

## How it works
**light-form** exports `<Input />`, `<Select />` and `<TextArea />` components.
These components come with `value` and `onChange` props attached under the hood.
Those props are wired up to the reducer with the matching name, eg. `customer` in the 
example above. So entering 'Jonas' and 'Jensen' into the example form above would give 
us this state tree:
```js
{
  customer: {
    firstname: 'Jonas',
    lastname: 'Jensen'
  }
}
```

The components' `value` prop is handled in the reducer and should never be explicitly set. 
The `onChange` prop is intercepted by the components' container, if defined. See 'Defining 
custom onChange handlers' below.

## Why it's useful
**light-form** aims to combine ease of use with flexibility. The following are its strong 
points.

### Reduced boilerplate
Mapping and attaching `value` and `onChange` props is done the same way in most use cases, 
so light-form abstracts that away. The same applies for the reducer which handles those 
props. Rather than typing out repetitive code, we can focus on the domain aspects which 
makes our forms unique. To demonstrate this, compare the example above to the 
[equivalent][vanilla gist] form in "vanilla" React/Redux. This grows more beneficial with 
increased complexity, such as with multi-part forms. See *Nested* demo/example.  

### No abstraction trade-off  
You can opt to have complete control of the form's events. The onChange prop and the reducer 
action handler have hooks which you can use to intercept the changes and perform mutations. 
This allows for have fine-tuned control where necessary, just like with vanilla React/Redux. 
See *InterceptOnChange* and *OnStateChange* demo/examples.

### No ad-hoc magic  
You can treat the provided components almost as standard 
[uncontrolled React components][uncontrolled], except they're in sync with the Redux store 
by default. Any props you pass them are applied. Eg., the provided `<Input />` is just a 
wrapper for a standard `<input />`, and will accept any props that would be valid for 
`<input />`. `value` and `onChange` are the exceptions, see "Defining custom event handlers".

## Defining custom event handlers
The exported components and reducer have hooks which you can pass functions to. This allows
for fine-grained control of the events passed to the components and the resulting state
on reducer changes.

### Custom onChange handlers for fields
If the `onChange` prop of a field is defined, the passed function will be invoked, and the 
return of that function will be passed to the internal onChange function. This allows for 
complete control of the onChange handling and outcome. The function passed to the prop will 
receive the event object as a parameter which you are free to copy and mutate as you please. 
Return this event object (or a copy) as a part of the custom onChange function, or a falsy 
value if you want to abort handling the event. See *Intercept OnChange* demo/example.

### Custom onStateChange handler for reducer
In addition to an optional *defaultState* second parameter, the Reducer accepts an
`onStateChange` function as an optional third parameter. If present, the passed function 
will be invoked after a state update has occurred, and the function will receive the updated 
state as a parameter. The function is free to mutate this state as needed. The function is 
expected to return an object, which will be applied as the new state for the reducer. See 
*OnStateChange* example.

[vanilla gist]: https://gist.github.com/j0nas/d597b3e7f6a6718f9c7c8ea0734d8c47
[surge]: http://light-form.surge.sh
[examples]: https://github.com/j0nas/light-form/tree/master/examples
[uncontrolled]: https://facebook.github.io/react/docs/uncontrolled-components.html