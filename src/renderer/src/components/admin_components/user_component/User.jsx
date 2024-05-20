import { useState } from "react";
import Table from "../../table_component/Table";

const User = () => {
  const [operation, setOperation] = useState(true);

  const tableData = [
    {
      
      "User ID": "001",
      FullName: "Damilola jibowu",
      Branch: "Mushin",
      Position: "IT",
      Contact: 9133909108,
      Email: "damilola.jibowu@gmail.com",
      Status: false,
    },
    {
      "User ID": "001",
      FullName: "Damilola jibowu",
      Branch: "Mushin",
      Position: "IT",
      Contact: 9133909108,
      Email: "damilola.jibowu@gmail.com",
      Status: true,
    },
    {
      "User ID": "001",
      FullName: "Damilola jibowu",
      Branch: "Mushin",
      Position: "IT",
      Contact: 9133909108,
      Email: "damilola.jibowu@gmail.com",
      Status: true,
    },
    {
      "User ID": "001",
      FullName: "Damilola jibowu",
      Branch: "Mushin",
      Position: "IT",
      Contact: 9133909108,
      Email: "damilola.jibowu@gmail.com",
      Status: true,
    },
    {
      "User ID": "001",
      FullName: "Damilola jibowu",
      Branch: "Mushin",
      Position: "IT",
      Contact: 9133909108,
      Email: "damilola.jibowu@gmail.com",
      Status: true,
    },
    {
      "User ID": "001",
      FullName: "Damilola jibowu",
      Branch: "Mushin",
      Position: "IT",
      Contact: 9133909108,
      Email: "damilola.jibowu@gmail.com",
      Status: true,
    }
  ];
  return (
    <div className="w-full h-full ">
      <Table operation={operation} tableData={tableData} popUpTypePath="../../admin_components/user_component/user_popup/UserRowPopUp" />
    </div>
  );
};

export default User;
