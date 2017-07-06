import React from "react";
import Input, {changeField, createBoundType} from "../../../src/Input/ducks/Input";
import {createStore} from "redux";

describe('Input duck', () => {
  const namespace = 'test';
  const actionType = createBoundType(namespace);

  it('handles actions', () => {
    const reducer = Input(namespace);
    const store = createStore(reducer);
    expect(store.getState()).toEqual({});

    store.dispatch(changeField(actionType, 'testInput', 'testValue'));
    const expectedState = {testInput: 'testValue'};
    expect(store.getState()).toEqual(expectedState);
  });

  it('calls onStateChange with the new state if the attribute is set', () => {
    const mockOnStateChange = jest.fn(state => state);
    const reducer = Input(namespace, {}, mockOnStateChange);
    const store = createStore(reducer);
    expect(store.getState()).toEqual({});

    store.dispatch(changeField(actionType, 'testInput', 'testValue'));
    const expectedState = {testInput: 'testValue'};
    expect(store.getState()).toEqual(expectedState);
    expect(mockOnStateChange).toHaveBeenCalledTimes(1);
    expect(mockOnStateChange).toHaveBeenCalledWith(expectedState);
  });

  it('applies the state returned from onStateChange', () => {
    const mockOnStateChange = jest.fn(state => ({
      ...state,
      ...(state.expectedPropWasPassed && {valueSetReactivelyToExpectedStateChange: true}),
    }));
    const reducer = Input(namespace, {}, mockOnStateChange);
    const store = createStore(reducer);
    expect(store.getState()).toEqual({});

    store.dispatch(changeField(actionType, 'UNexpectedPropWasPassed', true));
    expect(store.getState()).toEqual({UNexpectedPropWasPassed: true});

    store.dispatch(changeField(actionType, 'expectedPropWasPassed', true));
    expect(mockOnStateChange).toHaveBeenCalledTimes(2);
    expect(mockOnStateChange).toHaveBeenLastCalledWith({UNexpectedPropWasPassed: true, expectedPropWasPassed: true});
    expect(store.getState()).toEqual({
      expectedPropWasPassed: true,
      UNexpectedPropWasPassed: true,
      valueSetReactivelyToExpectedStateChange: true,
    });
  });

  it('applies custom action handlers if provided', () => {
    const TEST_CUSTOM_TYPE = 'TEST_CUSTOM_TYPE';
    const actionHandlers = {
      [TEST_CUSTOM_TYPE]: (state, action) => ({...state, addedValue: action.testValue })
    };

    const initialState = {initialValue: 'test'};
    const reducer = Input(namespace, initialState, null, actionHandlers);
    const store = createStore(reducer);

    store.dispatch({type: TEST_CUSTOM_TYPE, testValue: 'newValue'});
    expect(store.getState()).toEqual({initialValue: 'test', addedValue: 'newValue'});
  });
});