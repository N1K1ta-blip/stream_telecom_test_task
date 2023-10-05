import { useState } from 'react'
import './App.css'
import Switcher from './components/shared/switcher/Switcher'
import ListCard from './components/ui/cards/listCard/ListCard'
import TileCard from './components/ui/cards/tileCard/TileCard'
import { mainBlockType } from './data/switcher'
import { usersData } from './data/users'

function App() {
  const [activeMainBlockType, setActiveMainBlockType] = useState<string>('list')

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Список пользователей</h1>
      <Switcher
        items={mainBlockType}
        activeItem={activeMainBlockType}
        onSwitch={(item) => setActiveMainBlockType(item)}
      />
      <div className={activeMainBlockType === 'list' ? 'listMainBlock' : 'tileMainBlock'}>
        {usersData.map(el => {
          if (activeMainBlockType === 'list') {
            return <ListCard key={`listCard_${el.id}`} {...el} />
          } else {
            return <TileCard key={`tileCard_${el.id}`} {...el} />
          }
        })}
      </div>
    </>
  )
}

export default App
