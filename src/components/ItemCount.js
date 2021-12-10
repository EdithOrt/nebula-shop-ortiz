import React from 'react'

export default function ItemCount({count, setCount}) {
    const handleCount = (typeOfOperation) =>{
        if (typeOfOperation === 'onAdd'){
            if(count.initialValue < 20){
                setCount({
                    ...count,
                    initialValue: ++count.initialValue 
                })
            } else {
                console.log('ya no hay stock')
            }
        } else if (typeOfOperation === 'onRemove'){
            if(count.initialValue > 1){
                setCount({
                    ...count,
                    initialValue: --count.initialValue
                })
            } else {
                console.log('ya no se puede disminuir')
            }
        }
    }
    return (
        <div className='item-count'>
            <button className='item-count__button' onClick={() => handleCount('onRemove')}>-</button>

            <div className='item-count__container-quantity'>
                <p>{count.initialValue}</p>
            </div>

            <button className='item-count__button' onClick={() => handleCount('onAdd')}>+</button>
        </div>
    )
}
