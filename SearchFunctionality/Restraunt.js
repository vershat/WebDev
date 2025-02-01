const RestrauntCard=({
    name,
    image,
    lastMileTravelString
  })=>{
    return(
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h4>{lastMileTravelString}minutes</h4>
    </div>
    );
  };

  export default RestrauntCard;