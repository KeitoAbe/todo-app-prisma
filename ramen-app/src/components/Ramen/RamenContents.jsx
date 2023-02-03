import "./ramenContents.css";

function Ramen({ shopName, photoUrl }) {
  return (
    <div className="ramenContents">
      <h1>{shopName}</h1>
      <img src={photoUrl} alt={shopName} width="500px" />
    </div>
  );
}

export default Ramen;
