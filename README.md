Light-form
=========================
> Lightweight React/Redux forms with no boilerplate

[![Build status](https://ci.appveyor.com/api/projects/status/dndnekw66ncllmxy?svg=true)](https://ci.appveyor.com/project/j0nas/light-form)


`light-form` simplifies creating forms with a standard React/Redux setup. It does so by providing 
input components that have Redux action dispatchers attached under the hood, and a reducer to 
handle those actions. 

The cool thing this accomplishes is abstracting the boilerplate code required to handle input, 
without adding custom magic. You can treat the provided components as if they were standard React 
input components and pass them any props that standard components would accept. 
Take a look at the example to see what I mean, or check out the 
[live demo](http://light-form.surge.sh).

## Installation
```
npm install --save light-form  
```

## Example
In your form, import `Input` and declare your fields. Note the fields' dot-delimited `name` props.
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
[Check out a live demo here.](http://light-form.surge.sh)  
[See the examples.](https://github.com/j0nas/light-form/tree/master/examples)


## Defining custom onChange handlers
If the `onChange` prop of a field is defined, the passed function will be invoked prior
to invoking the internal onChange function. This allows for complete control of the onChange
handling and outcome. The function passed to the prop will receive the event object as a parameter
which you are free to copy and mutate as you please. Return this event object (or a copy) as a part 
of the custom onChange function, or `null` if you want to abort handling the event.  

See the "Intercept OnChange" example for more details.
