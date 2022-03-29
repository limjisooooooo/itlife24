import { url } from 'inspector';
import * as React from 'react'
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
    React.useEffect(() => {
        ctx.current = canvas.current!.getContext("2d");
        canvas.current!.width = parseInt(getComputedStyle(canvas.current!).getPropertyValue('width'));
        const image = new Image();
        image.src="/img/notebook.png";
        image.onload = () => {
            canvas.current!.style.height=((canvas.current!.width / image.width) * image.height).toString();
            canvas.current!.height = parseInt(getComputedStyle(canvas.current!).getPropertyValue('height'));
        }
        //canvas.current!.style.height="500px";        
        ctx.current!.strokeStyle="#000";
        ctx.current!.lineWidth= 2.5;                  
    },[])        

    return (
        <>            
            <div/>
            {/*<canvas ref={canvas} style={{border: "0.1em solid #000", width:"100%", margin:"5% 0", backgroundImage:`url("/img/notebook.png")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} */}
            <canvas ref={canvas} style={{border: "0.1em solid #000", width:"100%", margin:"5% 0"}} 
                onMouseDown={() => {painting.current = true}} 
                onMouseMove={(e) => {onMouseMove(e)}} 
                onMouseUp={() => {painting.current = false}} 
                onMouseLeave={() => {painting.current = false}}/>                            
        </>
    )
}
export default React.memo(CheckImg)