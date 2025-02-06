import * as React from "react";
import dayjs from "dayjs";
import ShagunLogo from "./Images/ShagunLogo.png";
import SunCrystLogo from "./Images/SunCrystLogo.png";
import Perfect10Logo from "./Images/Perfect10Logo.png";

const Header = ({ reportName, reportSubText }) => {
  const searchParams = new URLSearchParams(document.location.search);

  const getSubText = () => {
    if (!reportSubText) return <></>;
    return <span style={{ fontWeight: "bold"}}>{reportSubText}</span>;
  };

  const getReportTitle = () => {
    const projectName = searchParams.get("ReportProjectName");
    const entityName = searchParams.get("ReportEntityName");
    return projectName ? `${projectName}` : entityName ? `${entityName}` : "";
  };

  return (
    <>
      <div style={{textAlign:'center'}}>
            <div style={{ display: "inline-block", textAlign: "left", width: "33.2%"}}>
                <img src={SunCrystLogo} alt="Suncryst Logo" style={{height:'71.8px', width:'188.9px'}} />
                {/* height={50} */}
            </div>
            <div style={{ display: "inline-block", textAlign: "center", width: "33.1%"}}>
                <img src={Perfect10Logo} alt="Perfect10 Logo" style={{height:'71.8px', width:'188.9px'}}/>
                {/* <h4 style={{ marginBottom: "5px", fontSize: "18px" }}>{getReportTitle()}</h4> */}
                {/* <h5 style={{ marginBottom: "5px", fontSize: "15px" }}>{reportName}</h5>
                {getSubText()} */}
                
            </div>
            <div style={{ display: "inline-block", textAlign: "right", width: "33.1%"}}>
                <img src={ShagunLogo} alt="Shagun Logo" style={{height:'71.8px', width:'188.9px'}} />
            </div>
      </div>
      <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "5px", fontSize: "15px" }}>{reportName}</h5>
            {getSubText()}
      </div>
      {/* <div>
            <div style={{ "display" : "inline-block", "textAlign": "left", "width": "25%"}}>
                <label>{'Run Date: ' + dayjs(new Date()).format("DD/MM/YYYY")}</label>
            </div>
            <div style={{ "display" : "inline-block", "textAlign": "center", "width": "50%"}}>
                <label>Report duration from {reportFromDate} to {reportToDate} ({dateDaysDifference} Days)</label>
            </div>
            <div style={{ "display" : "inline-block", "textAlign": "right", "width": "25%"}}>
                <label>{'Run By: ' +searchParams.get('ReportByUser')}</label>
            </div>
        </div> */}
      <br />
    </>
  );
};
export default Header;
