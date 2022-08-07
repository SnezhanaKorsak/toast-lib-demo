import React, {useState} from "react";
import {ToastProvider, useToastService} from "@snega_k/toast-lib";


import TypeSettings from "../TypeSettings";
import PositionSettings from "../PositionSettings";
import OptionsSettings from "../OptionsSettings";

import {Options} from "./types"
import {Button, StyledSettings, Title} from "./styled";


const defaultSettings: Options = {
  mode: 'info',
  position: 'top-right',
  animation: 'zoom',
  autoClose: true,
  autoCloseTime: 5000,
  title: '',
  message: '',
  backgroundColor: '',
  textColor: '',
  padding: '5',
  icon: '',
}


const Settings = () => {
  const [settings, setSettings] = useState(defaultSettings)

  const {createToast} = useToastService()

  const {mode} = settings

  const addToast = () => {
    createToast(mode, settings);
  }

  const changeSettings = (option: string, value: string | number) => {
    setSettings({...settings, [option]: value})
  }

  return (
    <StyledSettings>
      <Title>Settings</Title>
      <TypeSettings changeSettings={changeSettings}/>
      <PositionSettings changeSettings={changeSettings}/>
      <OptionsSettings changeSettings={changeSettings}/>
      <Button onClick={addToast}>Show Toast</Button>
      <ToastProvider {...settings}/>
    </StyledSettings>
  )
}

export default Settings;
