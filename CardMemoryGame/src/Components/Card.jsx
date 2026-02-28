export const Card = ({ card, onClick }) => {

    return (
        <div className="card" onClick={[]}>
            <div className="card-front">?</div>
            <div className="card-back">{card.value}</div>
        </div>
    )
}