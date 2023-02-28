const OverviewConstructor = (props) => {
    return ( 
        <article>
            <img src={props.img} alt="Beer" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.tagline}</p>
                <p>Created by: {(props.contributedBy).slice(0,10)}</p>
            </div>
        </article>
     );
}
 
export default OverviewConstructor;