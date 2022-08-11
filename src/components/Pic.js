const Pic = ({author, url, alt}) => {
    return (
        <div id="pic">
            <p>Photographer: {author}</p>
            <img id="feed" src={url} alt={alt} />
        </div>
    )
}

export default Pic;