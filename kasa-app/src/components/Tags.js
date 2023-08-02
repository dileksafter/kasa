import '../styles/Tags.sass'

const Tags = ({ tags }) => {

    return (
        <div className='tags'>
            {tags.map((tag, i) => (
                <div className='tag' key={i} > {tag}
                </div>
            )
            )}
        </div>
    )

}

export default Tags;