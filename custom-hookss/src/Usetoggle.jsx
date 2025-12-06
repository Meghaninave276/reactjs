import React from 'react'
import { useState } from 'react'

export default function Usetoggle(defaultval) {
    const [value,setValue]=useState(defaultval);
    function togglevalue(val)
    {
        if(typeof val !='boolean')
        {
            setValue(!value)
        }
        else
        {
            setValue(val)
        }

    }
    return [value,togglevalue]
 
}
