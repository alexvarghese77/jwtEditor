import Image from "../../logoJWT.svg";
const header = () => {
  return (
    <div className="navBar">
      <div className="header">
        <h1>
          <img src={Image} alt="Logo" />
          <span className="headText">J W T Editor</span>
        </h1>
      </div>
    </div>
  );
};
export default header;
