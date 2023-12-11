import React, { memo, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { decrement, increment } from '../../slices/counterSlices';

const ButtonStyled = styled.button`
  background: #BF4F74;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const SpanStyled = styled.span`
    color: White;
    border: 1px solid red;
`;

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const data = [123, '123', 0.5];
    const functionCallBack = () => {
        data?.map(item => {
            console.log(typeof (item), "debug item");
        })
    };

    const testCallBackFunction = useCallback=(data, callBack) => {
        console.log(data);
        callBack();
    }


    
    return (
        <div>
            <div>
                <ButtonStyled
                    onClick={() => dispatch(increment())}
                    aria-label="Increment value"
                >
                    Increment
                </ButtonStyled>
                <SpanStyled>{count}</SpanStyled>

                <ButtonStyled
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </ButtonStyled>
            </div>
        </div>
    )
}
export default memo(Counter);