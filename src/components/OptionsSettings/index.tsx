import React, {ChangeEvent, useEffect, useState} from "react";

import {OptionsProps} from "../Settings/types";

import {StyledOptions} from "../Settings/styled";
import {AnimationSelect, AutoCloseInput, OptionsLabel} from "./styled";

const OptionsSettings: React.FC<OptionsProps> = ({changeSettings}) => {

  const [autoCloseTime, setAutoCloseTime] = useState(5000)

  const changeCloseTime = (event: ChangeEvent<HTMLInputElement>) => {
    setAutoCloseTime(+event.currentTarget.value)
  }

  const changeAnimationType = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value)
    changeSettings("animation", event.currentTarget.value)
  }

  useEffect(() => {
    changeSettings("autoCloseTime", autoCloseTime)
  }, [autoCloseTime])

  return (
    <StyledOptions>
      <OptionsLabel htmlFor="autoClose">
        Autoclose time
        <AutoCloseInput type="number" name="autoClose" id="autoClose"
                        value={autoCloseTime} onChange={changeCloseTime}/>ms
      </OptionsLabel>

      <OptionsLabel htmlFor="animationType">
       Animation
        <AnimationSelect name="animationType" onChange={changeAnimationType}>
          <option value="zoom">zoom</option>
          <option value="slide">slide</option>
          <option value="fade">fade</option>
        </AnimationSelect>
      </OptionsLabel>
    </StyledOptions>
  )
}

export default OptionsSettings;
