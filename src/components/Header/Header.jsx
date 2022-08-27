import Image from "../../logoJWT.svg";
const header = () => {
  return (
    <div className="navBar">
      <div className="header">
          <img src={Image} alt="Logo" />
        <h1 className="title">
        J W T Editor
        </h1>
      </div>
    </div>
  );
};
export default header;
