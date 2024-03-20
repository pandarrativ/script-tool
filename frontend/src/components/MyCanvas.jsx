import React, { useRef, useState, useEffect } from 'react';
import "../assets/css/mycanvas.css";
import NodeIcon from "../assets/icons/node.svg";

const MyCanvas = (props) => {
    const canvasRef = useRef(null);
    // add window resize lisitener
    useEffect(() => {
        window.addEventListener('resize', resizeCanvas);  //add eventlistener when page resize
        resizeCanvas(); // Initial setup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [props.data]);

    // resize canvas and reposition elements
    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas && canvas.parentElement) {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;

            const context = canvas.getContext('2d');
            context.fillStyle = '#fff';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#000';
            // drawLine(context, 10, 200, 500, 200);
            adjustElementPosition(context);
        }
    };

    // render page elements from input data
    const adjustElementPosition = (context) => {
        if (props.data) {
            // draw nodes for each stage
            props.data.forEach(item => {
                const x = item.position[0] * canvasRef.current.width;
                const y = item.position[1] * canvasRef.current.height;
                const cardWidth = canvasRef.current.width*0.18;
                drawImage(context, NodeIcon, x-21, y);
                drawHandwrittenText(context, item.stage,  x - 30, y -50, "30px", item.fontColor);
                drawCardWithText(context, x-cardWidth/2, canvasRef.current.height*0.5, cardWidth, item.description,  item.cardColor, item.fontColor);
            });
            // draw lines between nodes
            for(let i=1; i<props.data.length; i++){
                drawWrittenLine(
                    context, 
                    props.data[i-1].position[0] * canvasRef.current.width,
                    props.data[i-1].position[1] * canvasRef.current.height + 30,
                    props.data[i].position[0] * canvasRef.current.width,
                    props.data[i].position[1] * canvasRef.current.height  + 30,
                    'black',  // color
                    3         // width
                );

            }
        }
    };



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Function for drawing elements
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const drawHandDrawnRect = (context, x, y, width, height, color) => {
        context.beginPath();
        context.strokeStyle = color;
    
        // Top edge
        let lastX = x;
        let lastY = y;
        context.moveTo(lastX, lastY);
        for (let i = x; i < x + width; i += 10) {
            const nextX = i + 10;
            const nextY = y + (Math.random() - 0.5) * 10;
            context.lineTo(nextX, nextY);
            lastX = nextX;
            lastY = nextY;
        }
    
        // Right edge
        for (let i = y; i < y + height; i += 10) {
            const nextX = x + width + (Math.random() - 0.5) * 10;
            const nextY = i + 10;
            context.lineTo(nextX, nextY);
            lastX = nextX;
            lastY = nextY;
        }
    
        // Bottom edge
        for (let i = lastX; i > x; i -= 10) {
            const nextX = i - 10;
            const nextY = y + height + (Math.random() - 0.5) * 10;
            context.lineTo(nextX, nextY);
            lastX = nextX;
            lastY = nextY;
        }
    
        // Left edge
        for (let i = lastY; i > y; i -= 10) {
            const nextX = x + (Math.random() - 0.5) * 10;
            const nextY = i - 10;
            context.lineTo(nextX, nextY);
            lastX = nextX;
            lastY = nextY;
        }
    
        context.closePath();
        context.stroke();
    };
    

    const drawLine = (context, startX, startY, endX, endY, color = 'black', width = 10) => {
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = color;  
        context.lineWidth = width;  
        context.stroke();

    }
    const drawWrittenLine = (context, startX, startY, endX, endY, color = 'black', width = 10) => {
        // Calculate mid points
        let midX = (startX + endX) / 2;
        let midY = (startY + endY) / 2;
        let cpX1 = (midX + startX) / 2;
        let cpY1 = (midY + startY) / 2;
        let cpX2 = (midX + endX) / 2;
        let cpY2 = (midY + endY) / 2;

        // Add some randomness to control points
        cpX1 += (Math.random() - 0.5) * 15; 
        cpY1 += (Math.random() - 0.5) * 15;
        cpX2 += (Math.random() - 0.5) * 15;
        cpY2 += (Math.random() - 0.5) * 15;

        context.beginPath();
        context.moveTo(startX, startY);
        context.quadraticCurveTo(cpX1, cpY1, midX, midY);
        context.quadraticCurveTo(cpX2, cpY2, endX, endY);

        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.setLineDash([5, 3]); // Creates dashes in the line
        context.stroke();
    };
    const drawImage = (context, imgIcon, x, y) => {
        const img = new Image();
        img.onload = () => {
            context.drawImage(img, x, y);  // the size if the img is 42*42
        };
        img.src = imgIcon;
    }
    const drawText = (context, text, x, y, font = '16px Arial', color = 'black') => {
        context.font = font; // Set font for text
        context.fillStyle = color; // Set color for text
        context.fillText(text, x, y); // Draw the text
      };
      
    const drawHandwrittenText = (context, text, startX, startY, fontSize="20px",color = 'black') => {
        let x = startX;
        const font = fontSize+' Dancing Script'; // Use the handwriting font
        context.font = font;
        context.fillStyle = color;

        for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const xOffset = (Math.random() - 0.5) * 5; // Randomize X position slightly
        const yOffset = (Math.random() - 0.5) * 5; // Randomize Y position slightly
        context.fillText(letter, x + xOffset, startY + yOffset);
        x += context.measureText(letter).width;
        }
    };

    function drawCardWithText(context, x, y, width, text, cardColor = 'lightblue', fontColor = 'black') {
        // Draw the card
        const font = '20px Dancing Script'; // Use the handwriting font
        context.font = font;
        context.fillStyle = fontColor;
        // context.fillRect(x, y, width, height);
        const lineHeight = 40; // Adjust as needed
        const padding = 10;
        const textHeight = calculateTextHeight(text, font, 150, lineHeight);
        const cardHeight = textHeight + padding * 2;
        drawHandDrawnRect(context, x, y, width, cardHeight, cardColor);
        

        // draw text
        context.textAlign = 'left';
        context.textBaseline = 'top';
    
        // Variables for randomization
        let startX = x + 10; // Start a bit inside the card
        let startY = y + 10;
        let currentX = startX;
        let currentY = startY;
    
        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
    
            // Apply random offset to each letter
            const xOffset = (Math.random() - 0.1) * 2;
            const yOffset = (Math.random() - 0.1) * 2;
            currentX += xOffset;
            currentY += yOffset;
    
            // Draw each letter
            context.fillText(letter, currentX, currentY);
    
            // Update X position for next letter
            currentX += context.measureText(letter).width;
    
            // Line wrapping
            if (currentX > x + width - 20) {
                currentX = startX;
                currentY += parseInt(font, 10);
            }
    
            // Reset to new line if necessary
            if (letter === '\n') {
                currentX = startX;
                currentY += parseInt(font, 10);
            }
        }
    }
    const calculateTextHeight = (text, font, maxWidth, lineHeight) => {
        const words = text.split(' ');
        let lineCount = 1;
    
        // Temporary canvas for measuring text
        const tempCanvas = document.createElement('canvas');
        const tempContext = tempCanvas.getContext('2d');
        tempContext.font = font;
    
        let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            if (tempContext.measureText(currentLine + " " + word).width < maxWidth) {
                currentLine += " " + word;
            } else {
                lineCount++;
                currentLine = word;
            }
        }
    
        return lineCount * lineHeight;
    };
    
    

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className='canvas-container'>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default MyCanvas;
