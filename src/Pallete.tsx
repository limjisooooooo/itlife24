import * as React from 'react'
import './Pallete.css'
interface PalleteProps{
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const Pallete = (props: PalleteProps) => {    
    return (
        <div className="pallete">
            <div className="color_black" onClick={(e) => props.onClick(e)}></div>
            <div className="color_gray" onClick={(e) => props.onClick(e)}></div>            
            <div className="color_red" onClick={(e) => props.onClick(e)}></div>
            <div className="color_green" onClick={(e) => props.onClick(e)}></div>
            <div className="color_blue" onClick={(e) => props.onClick(e)}></div>
            <div className="color_yellow" onClick={(e) => props.onClick(e)}></div>
            <div className="color_white" onClick={(e) => props.onClick(e)}></div>
        </div>
    )
}
export default React.memo(Pallete)