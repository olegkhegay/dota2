import React from 'react'
import './Wrapper.css'
import Card from '../Card/Card'

const Wrapper = () => {
  return (
    <>
        <div className="wrapper">
            <Card title ="DOTA 2" text="5x5 turbo" num="1"/>
            <Card title ="DOTA 2" text="1x1 turbo" num="2"/>
            <Card title ="CS2" text="SOON" num="3"/>
        </div>
    </>
  )
}

export default Wrapper