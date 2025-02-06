import * as React from "react";
import dayjs from "dayjs";
import ShagunLogo from "./Images/ShagunLogo.png";
import SunCrystLogo from "./Images/SunCrystLogo.png";

const AccountReportHeader = ({ reportName, reportSubText }) => {
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
      <div>
        <div
          style={{ display: "inline-block", textAlign: "left", width: "25%" }}
        >
          <img src={SunCrystLogo} alt="Suncryst Logo" height={50} />
        </div>
        <div
          style={{ display: "inline-block", textAlign: "center", width: "50%" }}
        >
           <h4 style={{ marginBottom: "5px", fontSize: "20px" }}>{getReportTitle()}</h4>
          <h5 style={{ marginBottom: "5px", fontSize: "18px", marginTop: "20px" }}>{reportName}</h5>
          {getSubText()}
        </div>
        <div
          style={{ display: "inline-block", textAlign: "right", width: "25%" }}
        >
          <img src={ShagunLogo} alt="Shagun Logo" height={50} />
        </div>
      </div>
      <br />
    </>
  );
};
export default AccountReportHeader;
