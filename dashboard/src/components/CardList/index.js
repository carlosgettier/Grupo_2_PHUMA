import Card from '../Card';

const cardsTypes = {
    totalProducts:
    {
        textPrimary: 'Products in Data Base',
        textSecondary: '135',
        color: 'blue',
        fontAwesomeElement: <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
    },
    totalAmount: {
        textPrimary: 'Amount in products',
        textSecondary: '$546.456',
        color: 'green',
        fontAwesomeElement: <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
    },
    totalUsers: {
        textPrimary: 'Users quantity',
        textSecondary: '38',
        color: 'yellow',
        fontAwesomeElement: <i className="fas fa-user-check fa-2x text-gray-300"></i>
    }

};

function CardList(props) {
    return (
        <div className="row">
            {
                Object.keys(cardsTypes).map(thisCardKey =>
                    <Card
                        textPrimary={cardsTypes[thisCardKey].textPrimary}
                        textSecondary={props[thisCardKey]}
                        color={cardsTypes[thisCardKey].color}
                        fontAwesomeElement={cardsTypes[thisCardKey].fontAwesomeElement}
                        key={thisCardKey}
                    />
                )
            }
        </div>
    );
}

export default CardList;