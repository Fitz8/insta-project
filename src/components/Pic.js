const Pic = ({author, url, alt}) => {
    return (
        <div id="pic">
            <p>{author}</p>
            <img src={url} alt={alt} />
        </div>
    )
}

export default Pic;