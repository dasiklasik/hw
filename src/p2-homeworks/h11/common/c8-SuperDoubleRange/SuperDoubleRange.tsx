import React from 'react'
import {Slider} from "@mui/material";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
      minValue,
        maxValue,
        setMaxValue,
        setMinValue,
        ...props
    }
) => {
   const changeValue = (e: Event, value: number |number[]) => {
       if (Array.isArray(value)) {
           setMinValue(value[0])
           setMaxValue(value[1])
       }
   }

    return (
        <>
            <Slider
                value={[minValue, maxValue]}
               className={s.slider}
                onChange={changeValue}
            />
        </>
    )
}

export default SuperDoubleRange
