const Content = (props) => {
  return (
    <section className="wrapper">
      <p>ADVICE #{props.data.id}</p>
      <h1>"{props.data.advice}"</h1>
    </section>
  );
};

export default Content;
