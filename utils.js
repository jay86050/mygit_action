import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import * as excelJS from "exceljs";
import { saveAs } from "file-saver";
import ShagunLogo from "./Images/ShagunLogo.png";
import SunCrystLogo from "./Images/SunCrystLogo.png";

const exportToExcel = async (divToCaptureRef) => {
  const table = divToCaptureRef.current;

  const workbook = new excelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  let rowIndex = 0;

  // Add image 1 to the worksheet at top left (A1)
  const imgBlob1 = await fetch(ShagunLogo).then((res) => res.blob());
  const imageBase64_1 = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(imgBlob1);
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });

  const imageId1 = workbook.addImage({
    base64: imageBase64_1.split(",")[1],
    extension: "jpeg",
  });

  worksheet.addImage(imageId1, {
    tl: { col: 2, row: 2 }, // Image 1 start position (top left)
    ext: { width: 175, height: 100 }, // Image 1 size
  });

  // Add image 2 to the worksheet at top right (adjust the col based on the image width)
  const imgBlob2 = await fetch(SunCrystLogo).then((res) => res.blob());
  const imageBase64_2 = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(imgBlob2);
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });

  const imageId2 = workbook.addImage({
    base64: imageBase64_2.split(",")[1],
    extension: "jpeg",
  });

  worksheet.addImage(imageId2, {
    tl: { col: 8, row: 2 }, // Image 2 start position (top right)
    ext: { width: 175, height: 100 }, // Image 2 size
  });

  // // Add the title at the center of both images
  // worksheet.mergeCells(2, 7, 0, 6); // Merge cells for the title

  rowIndex += 1; // Move to the next row after the title

  // Iterate through the table and add cell content and borders
  table.querySelectorAll("tr").forEach((row, index) => {
    const excelRow = worksheet.getRow(++rowIndex);
    let cellIndex = 1;

    row.querySelectorAll("td").forEach((cell) => {
      let colspan = parseInt(cell.getAttribute("colspan")) || 1;
      const cellValue = cell.textContent.trim();

      // Add cell value and apply borders
      const excelCell = excelRow.getCell(++cellIndex);
      excelCell.value = cellValue;
      excelCell.font = { name: "Open Sans" };

      // Set text alignment
      let tdClass = cell.getAttribute("class")?.toString();
      if (
        tdClass?.indexOf("text-center") >= 0 ||
        index < 5 ||
        tdClass?.indexOf("textcenter") >= 0
      ) {
        excelCell.alignment = { vertical: "middle", horizontal: "center" };
        excelCell.font = { name: "Open Sans" };
      }
      if (tdClass?.indexOf("textbold") >= 0) {
        excelCell.font = { bold: true, name: "Open Sans" };
      }
      if (tdClass?.indexOf("text-center-Bold") >= 0) {
        excelCell.font = { bold: true, name: "Open Sans" };
      }
      if (tdClass?.indexOf("align-center") >= 0) {
        excelCell.alignment = { vertical: "middle" };
      }
      if (tdClass?.indexOf("textcenterbold") >= 0) {
        excelCell.alignment = { vertical: "middle", horizontal: "center" };
        excelCell.font = { bold: true, name: "Open Sans" };
      }
      // Auto-size columns based on cell content
      worksheet.getColumn(cellIndex).width = Math.max(18, cellValue.length * 2); // Minimum width of 20
      let tdId = cell.getAttribute("id")?.toString();
      if (index > 5 && cellValue.length > 30) {
        // worksheet.getColumn(cellIndex).height = 50;
        excelRow.height = 20;
        excelCell.alignment = { wrapText: "true" };
        excelCell.font = { name: "Open Sans" };
      }
      if (tdClass?.indexOf("text-break") >= 0) {
        excelRow.height = Math.max(20, (cellValue.length / 80) * 40);
        excelCell.alignment = { wrapText: "true", vertical: "middle" };
        excelCell.font = { name: "Open Sans" };
      }
      // if (tdClass?.indexOf("p-lr") >= 0) {
      //   console.log("p-lr", worksheet.getColumn(cellIndex));
      //   worksheet.getColumn(cellIndex).width = 1000;
      // }
      if (tdId?.startsWith("cost-center-name")) {
        excelRow.height = 50;
        const costCenterName = cell
          .querySelectorAll("div")[1]
          ?.textContent?.trim();
        const costCenterAmount = cell
          .querySelectorAll("div")[2]
          ?.textContent?.trim();

        const excelCell1 = excelRow.getCell(cellIndex);
        excelCell1.value = costCenterName;
        excelCell1.font = {
          italic: true,
        };
        excelCell1.alignment = {
          vertical: "middle",
          horizontal: "center",
          wrapText: true,
        };
        excelCell1.font = { size: 11, name: "Open Sans" };
        const excelCell2 = excelRow.getCell(++cellIndex);
        excelCell2.value = costCenterAmount;
        excelCell2.alignment = {
          vertical: "middle",
          horizontal: "center",
        };
        excelCell2.border = {
          bottom: {
            style: "thin",
            color: { argb: "00000000" },
            alignment: "center",
          },
        };
        excelCell2.font = { size: 11, name: "Open Sans" };
        colspan = 1;
      }

      // Handle colspan
      if (colspan > 1) {
        for (let i = 1; i < colspan; i++) {
          const nextCell = excelRow.getCell(cellIndex + i);
          nextCell.value = ""; // Clear merged cell values
          nextCell.alignment = {
            vertical: "middle",
            horizontal: "center",
            wrapText: true,
          };
          worksheet.getColumn(cellIndex + i).width = Math.max(
            18,
            cellValue.length * 2
          ); // Minimum width of 20
          worksheet.getColumn(cellIndex + i).height = 200;
        }
        if (index >= 0 && index < 5) {
          colspan = 9;
        }
        worksheet.mergeCells(
          rowIndex,
          cellIndex,
          rowIndex,
          cellIndex + colspan - 1
        );
        cellIndex += colspan - 1; // Update the cellIndex
      }

      // Apply border settings based on the row index

      if (index < 6 && index >= 0) {
        // Set border color to white for the top 5 rows
        const borderColor = { argb: "FFFFFFFF" }; // White color
        if (index < 5) {
          excelCell.font = { size: 14, bold: true, name: "Open Sans" };
        }
        excelCell.border = {
          top: {
            style: "thin",
            color: index === 0 ? { argb: "00000000" } : borderColor,
          },
          left: { style: "thin", color: { argb: "00000000" } },
          bottom: {
            style: "thin",
            color: index === 4 ? { argb: "00000000" } : borderColor,
          },
          right: { style: "thin", color: { argb: "00000000" } },
        };
      } else {
        const borderStyle = {
          style: "thin",
          color: { argb: "00000000" }, // dark black border color
        };
        excelCell.border = {
          top: borderStyle,
          left: borderStyle,
          bottom: borderStyle,
          right: borderStyle,
        };
      }

      if (tdId == "bottom-row-3") {
        excelRow.height = 70;
        excelCell.border = {
          left: { style: "thin", color: { argb: "FFFFFFFF" } },
          bottom: { style: "thin", color: { argb: "FFFFFFFF" } },
          right: { style: "thin", color: { argb: "FFFFFFFF" } },
        };
      }

      if (
        tdClass?.indexOf("bottom-row-2") >= 0 ||
        tdClass?.indexOf("bottom-row-1") >= 0
      ) {
        excelCell.border = {
          top: { style: "thin", color: { argb: "FFFFFFFF" } },
          left: { style: "thin", color: { argb: "FFFFFFFF" } },
          bottom: { style: "thin", color: { argb: "FFFFFFFF" } },
          right: { style: "thin", color: { argb: "FFFFFFFF" } },
        };
      }
    });
  });

  // Write the workbook to a buffer
  const buffer = await workbook.xlsx.writeBuffer();

  // Convert buffer to Blob
  const data = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Download the Blob as a file
  saveAs(data, "VoucherReport.xlsx");
};

const exportHtmlToPdf = (divToCaptureRef) => {
  const divToCapture = divToCaptureRef.current;

  if (divToCapture) {
    html2canvas(divToCapture, { scale: 3 }).then((canvas) => {
      const pdf = new jsPDF();
      const imgWidth = 210; // mm (A4 width)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const padding = 30; // Adjust the padding as needed

      // Create a new canvas with padding
      const paddedCanvas = document.createElement("canvas");
      const paddedCtx = paddedCanvas.getContext("2d");
      paddedCanvas.width = canvas.width + 2 * padding;
      paddedCanvas.height = canvas.height + 2 * padding;

      // Draw the original canvas content onto the padded canvas with padding
      paddedCtx.drawImage(canvas, padding, padding);

      // Convert the padded canvas to an image
      const paddedImgData = paddedCanvas.toDataURL("image/png");

      // Add the padded image to the PDF document
      pdf.addImage(paddedImgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("downloaded.pdf");
    });
  }
};

export { exportHtmlToPdf, exportToExcel };
