import React from 'react'
import { UpNavBar } from '../../UpNavBar/UpNavBar'
import './style.css'

type Props = {
  children: React.ReactNode
}

function InformationTemplate({ children }: Props) {
  return (
    <div>

      <UpNavBar></UpNavBar>

      {children}


    </div>
  )
}

export default InformationTemplate