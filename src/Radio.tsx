import * as React from 'react';
import './Radio.css';
interface RadioProps{
    name: string;
    radios: {'value':string, 'text': string}[];
}
const Radio = (props: RadioProps) => {
    const checkedRadio = React.useRef<Element|null>(null);
    const onClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        if(checkedRadio.current){            
            checkedRadio.current.removeAttribute("checked");
        }
        e.currentTarget.firstElementChild?.setAttribute("checked", "true");        
        checkedRadio.current = e.currentTarget.firstElementChild
    }    
    const makeRadio = () => {
        return props.radios.map((radio: any, idx) =>
        <label htmlFor={radio.value} key={idx} onClick={(e) => onClick(e)}>
            <input type="radio" name={props.name} value={radio.value}/>
            <span className='radio'/>
            {radio.text}            
        </label>
        )        
    }
    return(
        <div className='radiogroup'>
            {makeRadio()}
        </div>
    )
}
export default Radio
