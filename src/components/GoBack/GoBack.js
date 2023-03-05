import React from 'react'
import './GoBack.scss'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useAppNavigate } from 'hooks/useAppNavigate'

const GoBack = ({onClick}) => {
  return (
    <div className="go_back" onClick ={onClick}>
        <ArrowLeftOutlined />
    </div>
  )
}

export default GoBack