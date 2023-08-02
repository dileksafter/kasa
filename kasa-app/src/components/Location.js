import '../styles/Location.sass'

const Location = ({location}) =>{
    const locationArray = location.split('-')
    return (
        <div className='location'>
            {locationArray[1]}, {locationArray[0]}
        </div>
    )

}

export default Location