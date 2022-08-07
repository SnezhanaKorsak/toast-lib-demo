import React, {ChangeEvent} from "react";
import {StyledOptions} from "../Settings/styled";
import {OptionsProps} from "../Settings/types";
import {Input, Label} from "../Type/styled";

const PositionSettings: React.FC<OptionsProps> = ({changeSettings}) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    changeSettings("position", event.currentTarget.value)
  }

  return (
    <StyledOptions>
      <Input type="radio" id="top-right" name="position" value="top-right" onChange={onChangeHandler}/>
      <Label htmlFor="top-right">top-right</Label>

      <Input type="radio" id="top-left" name="position" value="top-left" onChange={onChangeHandler}/>
      <Label htmlFor="top-left">top-left</Label>

      <Input type="radio" id="bottom-right" name="position" value="bottom-right" onChange={onChangeHandler}/>
      <Label htmlFor="bottom-right">bottom-right</Label>

      <Input type="radio" id="bottom-left" name="position" value="bottom-left" onChange={onChangeHandler}/>
      <Label htmlFor="bottom-left">bottom-left</Label>

    </StyledOptions>
  )
}

export default PositionSettings;
