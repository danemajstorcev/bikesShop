import "./BikeCard.scss";
interface BikeCardProps {
  img: string;
  bikeName: string;
  bikePrice: number;
}
const BikeCard = ({ img, bikeName, bikePrice }: BikeCardProps) => {
  return (
    <div className="bike-card">
      <div className="img-wrapper">
      <img src={img} alt="" /></div>
      <div className="bike-info">
        <div className="bike-name">{bikeName}</div>
        <div className="bike-price">{bikePrice} $</div>
      </div>
    </div>
  );
};

export default BikeCard;
