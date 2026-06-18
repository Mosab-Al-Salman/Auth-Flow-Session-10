import "./Content.css";

const Content = ({ data }) => {
  return (
    <div className="page-content">
      <h2>Welcome to the {data} section.</h2>
    </div>
  );
}

export default Content;