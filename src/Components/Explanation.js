import React, { useState } from 'react';


function Explanation(props){
    const { info } = props;

    return (
        <div>
            {info}
        </div>
    )
};

export default Explanation;