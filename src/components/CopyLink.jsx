import copy from '../assets/copy.svg'
function CopyLink(props) {
    return <a href={props.link}><img src={copy}></img></a>
}

export default CopyLink;