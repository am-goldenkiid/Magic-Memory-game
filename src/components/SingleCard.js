import './SingleCard.css';
const SingleCard = ({card, handleChoice, flipped, disabled}) => {


    const handleClick = () => {
        if(!disabled) { //This ensures that the handleChoice function fires only when the card is not disabled. If the card has been disabled, the handChoice funtion wont fire, hence the card won't flip over
            handleChoice(card)
        }   
    }
    return ( 
        <div className='card'>
            <div className={flipped? "flipped" : ""}>
              <img className='front' src={card.src} alt="card front"/>
              <img 
              className='back' 
              src="/img/card-cover.png" 
              onClick={handleClick} 
              alt="card back" />
            </div>
        </div>
    );
}
 
export default SingleCard