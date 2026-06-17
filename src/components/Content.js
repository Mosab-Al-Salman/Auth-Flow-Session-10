import "./Content.css"

const Content = ({data}) => {
  return (
    <main className="page-content">
      <p>Welcome to the {data} section.</p>
    </main>
  );
}

export default Content;