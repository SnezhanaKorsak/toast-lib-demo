import React, {ChangeEvent} from "react";

import {Input, Label} from "./styled";
import {StyledOptions} from "../Settings/styled";
import {OptionsProps} from "../Settings/types";

const Type: React.FC<OptionsProps> = ({changeSettings}) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    changeSettings("mode", event.currentTarget.value)
  }

  return (
    <StyledOptions>
      <Input type="radio" id="info" name="type" value="info" onChange={onChangeHandler}/>
      <Label htmlFor="info">info</Label>

      <Input type="radio" id="success" name="type" value="success" onChange={onChangeHandler}/>
      <Label htmlFor="success">success</Label>

      <Input type="radio" id="warning" name="type" value="warning" onChange={onChangeHandler}/>
      <Label htmlFor="warning">warning</Label>

      <Input type="radio" id="error" name="type" value="error" onChange={onChangeHandler}/>
      <Label htmlFor="error">error</Label>

    </StyledOptions>
  )
}

export default Type;
