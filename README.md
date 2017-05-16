Light-form
=========================
> Lightweight library for boilerplate-free React/Redux forms

[![CircleCI](https://circleci.com/gh/j0nas/light-form/tree/master.svg?style=shield)](https://circleci.com/gh/j0nas/light-form/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/j0nas/light-form/badge.svg)](https://coveralls.io/github/j0nas/light-form)

**light-form** lets you create boilerplate-free React/Redux forms in four simple steps:
* in your view, `import {Input, Select, TextArea} from "light-form";`
* pass the components a `name` prop in the form of `[formName].[fieldName]`
  * (eg. `<Input name="myForm.myField" />`)
* in your root reducer, `import {Reducer} from "light-form";` 
* pass it `[formName]` and add it to your store under the same name  
  * (eg. `combineReducers({ myForm: Reducer('myForm'), ... })`)

And that's it, your form is ready!

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

## How it works
**light-form** exports `<Input />`, `<Select />` and `<TextArea />` components.
These components come with `value` and `onChange` props attached under the hood.
Those props are wired up to the reducer with the matching name, eg. `formName` in the 
example above. 

## Why it's useful
**light-form** aims to combine ease of use with flexibility. The following are it's strong points.

### Reducing boilerplate
Mapping and attaching `value` and `onChange` props is done similarly in most use cases, 
so light-form abstracts that away. The same applies for the reducer which handles those 
props. Rather than typing out repetitive code, we can focus on the domain aspects which 
makes our forms unique. To demonstrate this, compare the example above to the [equivalent]
[vanilla gist] form in "vanilla" React/Redux. This benefit scales with increased 
complexity, such as with multi-part forms. See *Nested* demo/example.  

### No abstraction trade-off  
You can opt to have complete control of the form's events. The onChange prop and the reducer 
action handler have hooks which you can use to intercept the changes and perform mutations. 
This allows for have fine-tuned control where necessary, just like with vanilla React/Redux. 
See *InterceptOnChange* and *OnStateChange* demo/examples.

### No ad-hoc magic  
You can treat the provided components almost as standard [uncontrolled React components]
[uncontrolled], except they're in sync with the Redux store by default.
Any props you pass them are applied. Eg., the provided `<Input />` is just a wrapper for 
a standard `<input />`, and will accept any props that would be valid for an `<input />`.

## How it works
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
[uncontrolled]: https://facebook.github.io/react/docs/uncontrolled-components.html