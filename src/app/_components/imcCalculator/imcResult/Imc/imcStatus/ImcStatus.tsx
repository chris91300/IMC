import React from 'react'
import { imcStatusComponentType } from './imcStatus'

export default function ImcStatus({ incrementationIsOver, imcStatus }: imcStatusComponentType) {
    
  return (
    <p className={ imcStatus.color }>{ incrementationIsOver? imcStatus.text : "" }</p>
  )
}
