import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import "../assets/css/mykonva.css";


const MyKonva = forwardRef( (props, ref) => {
    const containerRef= useRef();
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [position, setPosition] = useState({left:0, top:0});
    // calculate the convas size
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setSize({
                    width: containerRef.current.offsetWidth -9,  // 9 is the padding of container
                    height: containerRef.current.offsetHeight -9,
                });

                setPosition({
                    left: containerRef.current.getBoundingClientRect().left,
                    top: containerRef.current.getBoundingClientRect().top,
                });
            }
        };

        window.addEventListener('resize', updateSize);
        updateSize(); // Initial size update

        return () => window.removeEventListener('resize', updateSize);
    }, []);


    
    useImperativeHandle(ref, () => ({
        getSize(){
            return size;
        },
        getPosition(){
            return position;
        }
    }))
    
  
    return (
        <div className='my-konva-container' ref={containerRef}>
            <Stage width={size.width} height={size.height}>
                <Layer>
                     {props.renderElements()}
                        {/* <Rect
                            x={10}
                            y={20}
                            width={100}
                            height={50}
                            fill="lightblue"
                            draggable
                        /> */}
                </Layer>
            </Stage>
      </div>
    );
})

export default MyKonva;