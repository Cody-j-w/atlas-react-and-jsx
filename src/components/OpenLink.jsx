import open from '../assets/open.svg'
function OpenLink(props) {
    return <a href={props.link}><img src={open}></img></a>
}

export default OpenLink;