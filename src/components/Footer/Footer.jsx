import "./Footer.css";
const Footer = () => {
  return (
    <div 
    style={{ 
      padding: "16px", 
      position: "fixed",
      bottom: "0",
      background: "#ffffff",
      borderTop: "1px solid #e2e2e2" // Cập nhật border top tại đây
    }}>
    <p>
      This website is created as part of Hlsolutions program. The materials
      contained on this website are provided for general information only and
      do not constitute any form of advice. HLS assumes no responsibility for
      the accuracy of any particular statement and accepts no liability for
      any loss or damage which may arise from reliance on the information
      contained on this site.
    </p>
    <div style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>
      Copyright 2021 HLS
    </div>
  </div>
  );
};

export default Footer;
