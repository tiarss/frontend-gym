import type { ICard } from '../../types/components'
import './index.css'

const CardComponent = ({name, url}: ICard) => {
    return (
        <div key={url}>
            <p>{name}</p>
            <p>{url}</p>
            <button>View Detail</button>
        </div>
    )
}

export default CardComponent