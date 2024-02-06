import React from 'react'
import Container from '@/app/_components/globals/container/Container'
import { animationForImagesType } from '../imcResult'
import getAnimatedImages from './utils/getAnimatedImages'


type resultImagesProps = {
  animationForImages: animationForImagesType
}

export default function ResultImages({ animationForImages }: resultImagesProps){

  const images = getAnimatedImages(animationForImages)
  
  return (
    <Container className='relative w-20 h-[273px] shrink-0'>
      {images}
    </Container>
  )
}

