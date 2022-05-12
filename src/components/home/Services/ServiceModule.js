import "./ServiceModule.scss";
import { Link } from "react-router-dom";

function ServiceModule({ info }) {
  return (
    <Link to={info.slug}>
      <div
        className="service-module"
        style={{
          background: `linear-gradient(rgba(0,0,0,0) 55%, 70%, rgb(0,0,0)) 100%, url(${info.photo})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="service-title">{info.service.toUpperCase()}</h1>
      </div>
    </Link>
  );
}

export default ServiceModule;
