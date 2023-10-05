import { TypeSwitchItem } from '../../../types/switcher.types'
import './switcher.style.css'

interface Props {
    items: TypeSwitchItem[]
    activeItem: string
    onSwitch: (item: string) => void
}

const Switcher = ({
    items,
    activeItem,
    onSwitch
}: Props) => {
    return (
        <div className='switcher'>
            {items.map((item, key) => (
                <div
                    key={`switchItem_${key}`}
                    className={`switch_item ${item.item === activeItem ? 'active activeText' : ''}`}
                    onClick={() => onSwitch(item.item)}
                >
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default Switcher