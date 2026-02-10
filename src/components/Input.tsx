type Props = {
    label: string
    inputType: string
    id: string
}

export default function Input({label, inputType, id}: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={inputType} id={id} />
    </div>
  )
}
