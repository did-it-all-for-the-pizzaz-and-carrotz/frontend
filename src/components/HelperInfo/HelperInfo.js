import TextArea from 'rc-textarea'
import React from 'react'

const HelperInfo = ({value, onChange}) => {
  return (
    <div style={{width:"100%"}}>
      <TextArea
        value={value}
        onChange={onChange}
        placeholder="Notatki"
        bordered={false}
        autoSize={{
          minRows: 10,
          maxRows: 6,
        }}
        style={{
          width:"100%",
          border:"none",
          marginTop:"10px",
          boxShadow: "0px 2px 12px #4F4F4F60"
        }}
      />
    </div>
  )
}

export default HelperInfo