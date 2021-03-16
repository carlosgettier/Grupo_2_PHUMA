function Card(props) {
    //"card border-left-"+colorTheme+"shadow h-100 py-2"

    let colorTheme;

    if (props.color === 'blue') {
        colorTheme = 'primary';
    } else if (props.color === 'green') {
        colorTheme = 'success';
    } else if (props.color === 'yellow') {
        colorTheme = 'warning';
    }

    return (

        <div className="col-md-4 mb-4">
            <div className={`card border-left-${colorTheme} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`"text-xs font-weight-bold text-${colorTheme} text-uppercase mb-1"`}>{props.textPrimary}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.textSecondary}</div>
                        </div>
                        <div className="col-auto">
                            {props.fontAwesomeElement}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;