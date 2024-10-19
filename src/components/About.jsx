const About = () => {
  return (
    <div className="h-screen bg-dark flex justify-center items-center flex-col containerItem"> 
      <div className="section">
        <div className="details-left">
          <h2>
            Our Mission
          </h2>
          <p>
            At R2R, we uplift, encourage, and check up on our brothers and sisters in islam to be the best version they can be. Putting all their trust and hope in Allah, as well as bettering their livehood with good habits. 
          </p>
        </div>
        <img className="photos right-image" src="./public/group.jpg" />
      </div>

      <div className="section">
        <div className="details-right">
          <h2>
            What is R2R?
          </h2>
          <p>
            R2R stands for Road To Success, this brand symbolizes the initial road everyone has to go through in our lives, and from that road, we keep driving to the point of success, with the hope, trust, and belief that God almighty will take us there.
          </p>
        </div>
        <img className="left-image" src="./public/logo.png" />
      </div>
    </div>
  );
};

export default About;