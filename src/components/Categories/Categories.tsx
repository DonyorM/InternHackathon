import React from "react";
import QRCode from "../QRCode/QRCode";
const Categories: React.FC = () => {
  return (
    <div>
      <ul>
        Categories
        <li>Sandwiches</li>
        <li>Beverages</li>
        <QRCode/>

      </ul>
    </div>
  );
};

export default Categories;
