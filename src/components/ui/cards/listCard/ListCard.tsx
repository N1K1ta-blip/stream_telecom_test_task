import { IUserData } from '../../../../types/user.types'
import './listCard.style.css'

const ListCard = ({
    firs_name,
    last_name,
    middle_name,
    email,
    phone
}: Omit<IUserData, 'id'>) => {
  return (
    <div className='listCard'>
        <div className="listCard_item">{firs_name}</div>
        <div className="listCard_item">{last_name}</div>
        <div className="listCard_item">{middle_name}</div>
        <div className="listCard_item">{email}</div>
        <div className="listCard_item">{phone}</div>
    </div>
  )
}

export default ListCard