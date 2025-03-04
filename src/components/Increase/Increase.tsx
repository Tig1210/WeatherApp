import React, { useCallback, useEffect } from 'react'

interface IProp {
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const Increase = ({ setCount }: IProp) => {
  return <button onClick={() => setCount((prev: number) => prev + 1)}>+</button>
}

export default Increase
