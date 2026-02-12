type Props = {
    btnText: string
}

export default function Button({btnText}: Props) {
  return (
    <button>{btnText}</button>
  )
}
