import SingleTextCard from '../SingleTextCard';

function SingleTextCardList(props) {
    return (
        <div className="row">
            {
                props.cardsText.map(cardText =>
                    <SingleTextCard
                        text={cardText}
                        key={cardText}
                        id={cardText}
                    />
                )
            }
        </div>
    );
}

export default SingleTextCardList;