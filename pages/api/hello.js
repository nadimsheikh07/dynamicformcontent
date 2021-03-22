import React from "react";
import pdfHelper from "../../helper/pdfHelper";
import LeaveContent from "../../content/leave";

export default async (req, res) => {
  const { name, schoolName } = req.query
  const buffer = await pdfHelper.componentToPDFBuffer(
    <LeaveContent name={name} schoolName={schoolName} />
  );

  // prompt to download pdf
  // res.setHeader('Content-disposition', 'attachment; filename="article.pdf');

  // set content type
  res.setHeader('Content-Type', 'application/pdf');

  // output the pdf buffer
  res.end(buffer);
}