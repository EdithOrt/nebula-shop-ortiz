import {useState} from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer({greeting}) {
    const stock = 20

    const [count, setCount] = useState({initialValue: 1, stock: stock})
    return (
        <div>
            <p>{greeting}</p>

            <ItemCount count={count} setCount={setCount} />
        </div>
    )
}
