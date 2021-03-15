function SingleTextCard (props) {
    function handleClick (){
        const elemento = document.getElementById(props.id);
        elemento.classList.toggle('bg-info');
        elemento.classList.toggle('bg-danger');
    }

    return (
        <div onClick={handleClick} className="col-lg-6 mb-4">
            <div id ={props.id} className="card bg-info text-white shadow">
                <div className="card-body">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default SingleTextCard;