import React, { useState } from 'react';
import styled from 'styled-components';

function Explanation(props){
    const { info } = props;
    

    return (
        <Div>{info}</Div>
    )
};

const Div = styled.div`
    margin: 10px 250px;
`

export default Explanation;