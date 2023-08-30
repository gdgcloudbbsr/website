const HeaderTitle = ({ h1, p, h2 = false }) => {
  return (
    <div className="HeaderTitle">
      <div className="hide">{h2 ? <h3>{h2}</h3> : <h1>{h1}</h1>}</div>
      <div className="lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{p}</p>
    </div>
  );
};

export default HeaderTitle;
