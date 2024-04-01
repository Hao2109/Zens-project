import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/public/assets/logo.png" />
      <div className="right">
        <div className="user-info">
          <div style={{ fontStyle: "italic", color: "gray" }}>
            Handicrafted by
          </div>
          <div>Jim HLS</div>
        </div>
        <img className="avatar" src="/public/assets/avatar.jpg" />
      </div>
    </div>
  );
};

export default Header;
