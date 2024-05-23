import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources
  return (
    <div className="bgContainer">
      <div className="insideContainer">
        <h1 className="mainHeading">
          How satisfied are you with our customer experience
        </h1>
        <div className="buttonClass">
          <div className="buttonClassSmall">
            <button type="button" className="button">
              <img src={emojis[0].imageUrl} alt="cross" className="image" />
            </button>
            <h1 className="buttonHeading">{emojis[0].name}</h1>
          </div>
          <div className="buttonClassSmall">
            <button className="button">
              <img src={emojis[1].imageUrl} alt="cross" className="image" />
            </button>
            <h1 className="buttonHeading">{emojis[1].name}</h1>
          </div>
          <div className="buttonClassSmall">
            <button className="button">
              <img src={emojis[2].imageUrl} alt="cross" className="image" />
            </button>
            <h1 className="buttonHeading">{emojis[2].name}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Feedback
