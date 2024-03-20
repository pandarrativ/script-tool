import React, {useState, useEffect} from 'react';
import { Rect, Text, Transformer } from 'react-konva';

const ElementCard = ({ x, y, cardTitle, onTextChange }) => {
    const [isEditing, setIsEditing] = useState(true);
    const [text, setText] = useState("qwe");

    const handleTextChange = (e) => {
        setText(e.target.value);
        // if (onTextChange) {
        //     onTextChange(e.target.value);
        // }
        console.log(e.target.value);
    };

    const handleDoubleClick = () => {
        setIsEditing(true);
        console.log(isEditing);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };


    // pointer:cursor
    const handleMouseEnter = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = "pointer";
    };

    const handleMouseLeave = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = "default";
    };
    return (
        <React.Fragment>
            <Rect
                x={x}
                y={y}
                width={100}
                height={300}
                fill="lightblue"
                draggable
            />
            <Text
                text={cardTitle}
                x={x}
                y={y}
                width={100}
                height={50}
                align="center"
                verticalAlign="middle"
                onDblClick={handleDoubleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <Rect
                x={x}
                y={y + 200}
                width={100}
                height={100}
                fill="red"
                draggable
            />
            {isEditing && (
                 <input
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                    onBlur={handleBlur}
                    autoFocus
                    className='element-card-input'
                    style={{
                        border: 'none',
                        width: '100px',
                        height: '90px',
                        textAlign: 'center'
                    }}
                />
            )}
        </React.Fragment>
    );
};

export default ElementCard;
