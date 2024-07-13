function Facilities() {
  const cardStyle = {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    width: "250px",
    textAlign: "center",
    transition: "box-shadow 0.3s ease",
    backgroundColor: "#abcbce",
    marginTop: "35px",
  };
  const contactInfoStyleone ={
    marginTop: "20px",
  }
   const contactInfoStyletwo ={
    marginTop: "20px",
  }
  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const contactInfoStyle = {
    marginTop: "10px",
  };

  const hoverStyle = {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "0px",
        paddingTop: "30px",
        backgroundColor: "#cde8e5",
        marginBottom : "55px",
      }}
    >
     {/* <div className="Facilities-Text">
        <h4>Facilities</h4> */}
        
      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>Gymnasium</h6>
        <img src="Image/Facilities/gym.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyleone}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Torin Weerasinghe</em>
          </p>
          <p>
            Contact no - <em>070 22 20 886</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>Laundry</h6>
        <img src="Image/Facilities/laundry.jpeg" alt="" style={imgStyle} />
        <div style={contactInfoStyletwo}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>Laundry man - <em>Mr. shailesh patel</em></p>
          <p>
            Contact no - <em>078 22 20 886</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>
          Library
        </h6>
        <img src="Image/Facilities/bookshelf.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Deshan Samaranayaka</em>
          </p>
          <p>
            Contact no - <em>077 22 20 886</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>
          Parcel Services
        </h6>
        <img src="Image/Facilities/delivery.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Jaliya bandara</em>
          </p>
          <p>
            Contact no - <em>071 22 20 886</em>
          </p>
        </div>
      </div>

      <div style={{ ...cardStyle, ...hoverStyle }}>
        <h6 style={{ fontSize: "20px", paddingBottom: "20px" }}>Sports Club</h6>
        <img src="Image/Facilities/sportClub.jpg" alt="" style={imgStyle} />
        <div style={contactInfoStyle}>
          <p>
            Opening time - <em>(morning)</em> 5 AM - 8 PM
          </p>
          <p>
            Trainer name - <em>Mr. Keerti Dharmasiri</em>
          </p>
          <p>
            Contact no - <em>072 22 20 886</em>
          </p>
        </div>
      </div>
      
    </div>
    
  );
}

export default Facilities;
