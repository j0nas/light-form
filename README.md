Light-form
=========================
> Lightweight React/Redux form state management

light-form is a small library for easily making simple forms with a standard React/Redux setup. 
Its primary goal is to reduce the amount of boilerplate written for standard form
handling without adding any magic or library lock-in.

## Installation
```
npm install --save light-form  
```

## Example
To get started, simply import ``Input`` and declare your fields. ``Input`` is a wrapper 
around the standard ``input`` field and will pass any received props to it, except for 
``onChange`` and ``value`` which are handled internally.
   
```jsx harmony
// MyCustomerForm.jsx
import React from 'react';
import {Input} from 'light-form';

const MyCustomerForm = () =>
  <div>
    <Input name="first" placeholder="First name" />
    <Input name="middle" className="optional" />
    <Input name="last" />
  </div>;
    
export default MyCustomerForm;
```

Then import the reducer, alias as desired and add it to your setup 
(eg. using ``combineReducers``).

```jsx harmony
// rootReducer.js
import {combineReducers} from 'redux';
import {Reducer as customer} from 'light-form';

const rootReducer = combineReducers({
  customer,
  // .. other reducers
});

export default rootReducer;
```