import { useState } from "react"

const withBackgroundColor = (WrappedColor) => (props) => {
  const [color, setColor] = useState("")

  return (
    <>
      <input
        type="text"
        value={color}
        placeholder="Enter the color"
        onChange={(event) => setColor(event.target.value)}
      />
      <WrappedColor {...props} bgcolor={color} />
    </>
  )
}

export default withBackgroundColor
