import React from 'react'

export default function Submit({ disabled, children }:{disabled: boolean, children: string}) {
    
    const className = `px-6 py-2 border-2 border-black rounded-full hover:font-bold hover:border-3 ${disabled ? 'cursor-not-allowed' : ''}`

  return (
    <button
        disabled={ disabled }
        className={ className }
        type="submit"
    >
        { children }
    </button>
  )
}

