import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";

interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

const ExpenseFormList = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const showData = async () => {
      const response = await axios.get<UserType[]>(
        "http://localhost:3000/users"
      );
      setUsers(response.data);
    };

    showData();
  }, []);

  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        showGridlines
      >
        <Column field="id" header="ID"></Column>
        <Column field="firstName" header="First Name"></Column>
        <Column field="lastName" header="Last Name"></Column>
        <Column field="age" header="Age"></Column>
        <Column field="gender" header="Gender"></Column>
      </DataTable>
    </div>
  );
};

export default ExpenseFormList;
