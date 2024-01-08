import React from 'react'
import { imcResultPropsType } from './imcResult';

export default function ImcResult(props: imcResultPropsType) {
    const { imc } = props;
  return (
    <div>
        <h2>ImcResult</h2>
        <p>imc = {imc}</p>
    </div>
  )
}
