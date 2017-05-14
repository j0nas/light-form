Light-form
=========================
> Lightweight library for lightweight React/Redux forms

[![CircleCI](https://circleci.com/gh/j0nas/light-form/tree/master.svg?style=shield)](https://circleci.com/gh/j0nas/light-form/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/j0nas/light-form/badge.svg?branch=feature%2Fadd-other-input-components)](https://coveralls.io/github/j0nas/light-form?branch=feature%2Fadd-other-input-components)

**light-form** provides components that already have `onChange` and `value` props attached,
 so you don't have to manually define them, and a reducer to handle the onChange actions.

You can still treat the provided components as if they were standard React `<input />` 
components and pass them any props that standard input components would accept. 

Take a look at the examples folder, or check out the [live demo][surge].

## Installation
```
npm install --save light-form  
```

## Example
In your form, import `Input` and declare your fields. Note the fields' dot-delimited `name` props.
```jsx harmony
import React from 'react';
import {Input} from 'light-form';

const MyCustomerForm = () =>
  <div>
    <Input name="customer.firstname" />
    <Input name="customer.lastname" />
  </div>;
    
export default MyCustomerForm;
```

Import `reducer` and pass it the name which you alias the reducer to. This should be the same
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
`Input`, when given a `name` property, will update the values held in its respective reducer if that 
`reducer` is imported under the same *namespace* as the Input in question. Namespace here being
the name of the reducer as part of the state tree. In the example above, that would be `customer`.

Inputting 'Jonas' and 'Jensen' into the example form above would give us this state tree:
```js
{
  customer: {
    firstname: 'Jonas',
    lastname: 'Jensen'
  }
}
```
 
`Input` is a wrapper around the standard ``input`` field and will pass any received props to it.
The exception to this are `onChange` and `value` props:
*  `value` is handled behind the scenes and should never be explicitly set
*  `onChange` is intercepted by the container, if defined. See 'Defining custom onChange handlers' below.

## Examples
*  [Check out a live demo here.][surge]  
*  [See the examples.][examples]

## Defining custom onChange handlers
If the `onChange` prop of a field is defined, the passed function will be invoked prior
to invoking the internal onChange function. This allows for complete control of the onChange
handling and outcome. The function passed to the prop will receive the event object as a parameter
which you are free to copy and mutate as you please. Return this event object (or a copy) as a part 
of the custom onChange function, or `null` if you want to abort handling the event.  

See the "Intercept OnChange" example for more details.

[vanilla gist]: https://gist.github.com/j0nas/d597b3e7f6a6718f9c7c8ea0734d8c47
[surge]: http://light-form.surge.sh
[examples]: https://github.com/j0nas/light-form/tree/master/examples