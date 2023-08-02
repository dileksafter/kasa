import '../styles/Host.sass'

const Host = ({ host }) => {
    return (

        <div className='host'>
            <img src={host.picture} alt={host.name}></img>
            <div className='host-name'>
                {host.name}
            </div>

        </div>

    )
}

export default Host