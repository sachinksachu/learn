import React, { useState } from 'react';
import "../drag/drag.css"
import list from './items';

function Drag(props) {
    const [items, setItems] = useState(list);
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);
    const [dropItemIndex, setDropItemIndex] = useState(null);

    const handleDragStart = (e, index) => {
        setDraggedItemIndex(index)
    }

    const handleDragOver = (e, index) => {
        setDropItemIndex(index)
        console.log("drag index", index)
    }

    const handleDragEnd = (e, index) => {
        const newItems = [...items];
        const [du] = newItems.splice(index, 1)
        newItems.splice(dropItemIndex, 0, du)
        // console.log(newItems)
        setItems(newItems)
        setDraggedItemIndex(null)
        setDropItemIndex(null)
    }

    return (
        <div>
            {items.map((item, index) => (
                <div key={item.id}>
                    {(dropItemIndex === index && dropItemIndex === 0) ? <p>****************</p> : null}
                    <div className='layer'
                        draggable={true}
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDragEnd={(e) => handleDragEnd(e, index)}
                    >
                        <p key={index}>{item.title}</p>
                        <img src={item.thumbnailUrl} alt='goods' />
                    </div>
                    {(dropItemIndex === index && dropItemIndex !== 0) ? <p>****************</p> : null}
                </div>
            ))}
        </div>
    );
}

export default Drag;