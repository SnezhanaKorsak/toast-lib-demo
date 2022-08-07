export type Mode = "info" | "success" | "warning" | "error"
type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left"
type Animation = "slide" | "fade" | "zoom"

export type Options = {
  mode: Mode,
  position: Position,
  animation: Animation,
  autoClose: boolean,
  autoCloseTime: number,
  title: string,
  message: string,
  backgroundColor: string,
  textColor: string,
  padding: string,
  icon: string,
};

export type OptionsProps = {
  changeSettings: (option: string, value: string | number) => void
}
