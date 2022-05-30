const Card = ({ img, heading, body }) => {
  return (
    <div>
      <img src={img} alt="" width="50%" style={{ marginTop:'3rem' ,marginLeft:'auto',marginRight:'auto'}}/>
      <h1 style={{ marginTop:'2rem'}}>{heading}</h1>
      <p style={{ width: "300px", margin:"0 auto" }}>{body}</p>
    </div>
  );
};

export default Card;
