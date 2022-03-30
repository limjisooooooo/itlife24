import * as React from 'react';
import './Radio.css';
interface RadioProps{
    name: string;
    radios: {'value':string, 'text': string}[];
}
const Radio = (props: RadioProps) => {
    const makeRadio = () => {
        return props.radios.map((radio: any, idx) =>
                <div className='radio' key={idx}>
                    <input type="radio" name={props.name} value={radio.value}/>
                    <label htmlFor={radio.value}>{radio.text}</label>
                </div>
        )        
    }
    return(
        <>
            {makeRadio()}
        </>
    )
}
export default React.memo(Radio)
