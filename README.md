Light-form
=========================
> Lightweight library for boilerplate-free React/Redux forms

[![CircleCI](https://circleci.com/gh/j0nas/light-form/tree/master.svg?style=shield)](https://circleci.com/gh/j0nas/light-form/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/j0nas/light-form/badge.svg)](https://coveralls.io/github/j0nas/light-form)

**light-form** removes the need to write boilerplate code for React/Redux forms. 
 
 exports three components: `Input`, `Select` and `TextArea`.
When you pass them a name property, they will dispatch onChange actions
to update their respective reducers, without  
Given a `name` property


**light-form** provides `Input`, `Select` and `TextArea` components that have `onChange` 
and `value` props attached, so you don't have to manually define them, and a `Reducer` 
to handle the onChange actions.

You treat the provided components as if they are standard React input components.
Any props you pass them are applied. Eg., the `<Input />` is just a wrapper for 
a standard `<input />`, and will accept any props that would be valid for an 
`<input />`.

Take a look at the examples folder, or check out the [live demo][surge].

## Installation
```
npm install --save light-form  
```

## Example
In your form, import `Input` and declare your fields. Note the fields' dot-delimited `name` props.
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
Compared to the [equivalent][vanilla gist] form in *vanilla* React, we see **light-form**
removing the need to write boring boilerplate code for simple functionality. This benefit
scales with increased complexity, such as with multi-part forms. 

## How it works
**light-form** exports `<Input />`, `<Select />` and `<TextArea />` components.
These wrap their equivalent React fields (`<input />`, `<select />`, `<textarea />`) 
and will pass them any received props, except for `onChange` and `value`:
*  `value` is handled in the reducer and should never be explicitly set
*  `onChange` is intercepted by the container, if defined. See 'Defining custom onChange handlers' below.

When given a `name` property, the components will update the values held in its respective 
reducer on changes, if that `Reducer` is imported under the same *namespace* as the component 
in question. Namespace here being the name of the reducer as part of the state tree. 
In the example above, that would be `customer`.

Inputting 'Jonas' and 'Jensen' into the example form above would give us this state tree:
```js
{
  customer: {
    firstname: 'Jonas',
    lastname: 'Jensen'
  }
}
```

## Examples
*  [Check out a live demo here.][surge]  
*  [See the examples.][examples]

## Defining custom onChange handlers
If the `onChange` prop of a field is defined, the passed function will be invoked prior
to invoking the internal onChange function. This allows for complete control of the onChange
handling and outcome. The function passed to the prop will receive the event object as a parameter
which you are free to copy and mutate as you please. Return this event object (or a copy) as a part 
of the custom onChange function, or a falsy value if you want to abort handling the event.  

See the "Intercept OnChange" example for more details.

[vanilla gist]: https://gist.github.com/j0nas/d597b3e7f6a6718f9c7c8ea0734d8c47
[surge]: http://light-form.surge.sh
[examples]: https://github.com/j0nas/light-form/tree/master/examples