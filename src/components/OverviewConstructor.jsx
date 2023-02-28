const OverviewConstructor = (props) => {
    return ( 
        <article className="flex justify-between">
            <img src={props.img} alt="Beer" />
            <div className="text-center">
                <h2 className="text-red-600">{props.name}</h2>
                <p className="text-red-600">{props.tagline}</p>
                <p className="text-red-600">Created by: {(props.contributedBy).slice(0,10)}</p>
            </div>
        </article>
     );
}
 
export default OverviewConstructor;