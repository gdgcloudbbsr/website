const HeaderTitle = ({ h1 = false, p = false, h2 = false, h3 = false }) => {
  return (
    <div className="HeaderTitle">
      <div className="hide">
        {h1 && <h1>{h1}</h1>}
        {h2 && <h2>{h2}</h2>}
        {h3 && <h3>{h3}</h3>}
      </div>
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
