Light-form
=========================
> Lightweight React/Redux form state management

light-form allows easily making forms with a standard React/Redux setup. 
Its goal is to reduce the amount of boilerplate code needed for standard form
handling whilst still letting you be in control over the resulting form data state.

## Installation
```
npm install --save light-form  
```

## Example
In your form. import `Input` and declare your fields. Note the fields' `name` props.
```jsx harmony
// MyCustomerForm.jsx
import React from 'react';
import {Input} from 'light-form';

const MyCustomerForm = () =>
  <div>
    <Input name="customer.first" placeholder="First name" />
    <Input name="customer.middle" className="optional" />
    <Input name="customer.last" />
  </div>;
    
export default MyCustomerForm;
```

Import `reducer` and pass it the name which you alias the reducer to. This should be the same
as the first part of the dot-delimited `name` property for the fields in your form.
Then add the reducer to your store setup (eg. using ``combineReducers``).
```jsx harmony
// rootReducer.js
import {combineReducers} from 'redux';
import {reducer} from 'light-form';

const rootReducer = combineReducers({
  customer: reducer('customer'),
  // .. other reducers
});

export default rootReducer;
```

## How it works
`Input`, when given a `name` property, will update the values held in its respective reducer if that 
`reducer` is imported under the same namespace as the Input in question. *Namespace* here refers 
to the name of the reducer as part of the state tree. In the example above, that would be `customer`.

Given the example above, inputting 'Jonas' and 'Jensen' into the first and last field respectively
would give us this state tree:
```js
{
  customer: {
    firstname: 'Jonas',
    lastname: 'Jensen'
  }
}
```
 
`Input` is a wrapper around the standard ``input`` field and will pass any received props to it, 
except for `onChange` and `value` which are handled internally.

## Examples
[Be sure to check the examples here.](https://github.com/j0nas/light-form/tree/master/examples)