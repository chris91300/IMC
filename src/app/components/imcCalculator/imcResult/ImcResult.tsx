import React from 'react'
import { imcResultPropsType } from './imcResult';

export default function ImcResult(props: imcResultPropsType) {
    const { tall, weight } = props;
  return (
    <div>
        <h2>ImcResult</h2>
        <p>taille = {tall}</p>
        <p>weight = {weight}</p>
    </div>
  )
}
