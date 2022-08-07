import React, {useState} from "react";
import {ToastProvider, useToastService} from "@snega_k/toast-lib";
import {Options} from "./types"
import TypeSettings from "../Type";
import {StyledSettings, Title} from "./styled";
import PositionSettings from "../Position";

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

  const changeSettings = (option: string, value: string) => {
     setSettings({...settings, [option]: value})
  }

  return (
    <StyledSettings>
      <Title>Settings</Title>
      <TypeSettings changeSettings={changeSettings}/>
      <PositionSettings changeSettings={changeSettings}/>
      <button onClick={addToast}>Click</button>
      <ToastProvider {...settings}/>
    </StyledSettings>
  )
}

export default Settings;
