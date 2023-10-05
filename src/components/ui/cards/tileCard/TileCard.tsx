import { IUserData } from '../../../../types/user.types'
import './tileCard.style.css'

const TileCard = ({
    firs_name,
    last_name,
    middle_name,
    email,
    phone
}: Omit<IUserData, 'id'>) => {
    return (
        <div className='tileCard'>
            <p>Имя: {firs_name}</p>
            <p>Фамилия: {last_name}</p>
            <p>Отчество: {middle_name}</p>
            <p>Email: {email}</p>
            <p>Номер телефона: {phone}</p>
        </div>
    )
}

export default TileCard