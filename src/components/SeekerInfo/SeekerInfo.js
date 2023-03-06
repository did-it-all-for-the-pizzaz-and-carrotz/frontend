import React from 'react'
import { PhoneFilled } from '@ant-design/icons'

const SeekerInfo = () => {
    return (
        <>
            <h3>Telefony zaufania</h3>
            <p>ANTYDEPRESYJNY TELEFON ZAUFANIA</p>
            <div><PhoneFilled style={{marginRight:"10px", transform:"scaleX(-1)" }}/><span>+48 888888888</span></div>
            <p>TELEFON ZAUFANIA DLA DOROSŁYCH</p>
            <div><PhoneFilled style={{marginRight:"10px", transform:"scaleX(-1)" }}/><span>+48 888888888</span></div>
            <p>TELEFON ZAUFANIA DLA DZIECI I MŁODZIEŻY</p>
            <div><PhoneFilled style={{marginRight:"10px", transform:"scaleX(-1)" }}/><span>+48 888888888</span></div>

        </>
    )
}

export default SeekerInfo