import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

function HelpfulResource(props) {
    return <div className="helpful-resource">
        {props.label}
        <OpenLink link={props.link} />
        <CopyLink link={props.link} />
    </div>
}

export default HelpfulResource;