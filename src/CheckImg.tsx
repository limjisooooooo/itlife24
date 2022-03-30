import { url } from 'inspector';
import * as React from 'react'
import Pallete from './Pallete';
const CheckImg = () => {
    const painting = React.useRef(false);
    const canvas = React.useRef<HTMLCanvasElement>(null);        
    const ctx = React.useRef<CanvasRenderingContext2D|null>(null);        
    const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {                
        if(painting.current){
            ctx.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.current?.stroke();
        }else{
            ctx.current?.beginPath();
            ctx.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
    }
    const palleteClick = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ctx.current!.strokeStyle = getComputedStyle(e.currentTarget,null).getPropertyValue("background-color");
    },[])
    React.useEffect(() => {
        const image = new Image();
        image.src="/img/notebook.png";
        image.onload = () => {
            ctx.current = canvas.current!.getContext("2d");
            canvas.current!.width = parseInt(getComputedStyle(canvas.current!).getPropertyValue('width'));
            canvas.current!.style.height=((canvas.current!.width / image.width) * image.height).toString() + "px";            
            canvas.current!.height = parseInt(getComputedStyle(canvas.current!).getPropertyValue('height'));            
            ctx.current!.drawImage(image, 0, 0, canvas.current!.width, canvas.current!.height);                        
            ctx.current!.strokeStyle="#000";
            ctx.current!.lineWidth= 2.5;               
        }                       
    },[])        

    return (
        <>                        
            <canvas ref={canvas} style={{border: "0.1em solid #000", width:"100%", margin:"5% 0 1%"}} 
                onMouseDown={() => {painting.current = true}} 
                onMouseMove={(e) => {onMouseMove(e)}} 
                onMouseUp={() => {painting.current = false}} 
                onMouseLeave={() => {painting.current = false}}/>        
            <Pallete onClick={palleteClick}/>                    
        </>
    )
}
export default React.memo(CheckImg)