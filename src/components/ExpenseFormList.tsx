import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { UserType } from "../App";

interface Props {
  users: UserType[];
}

const ExpenseFormList = ({ users }: Props) => {
  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Show {first} - {last} of {totalRecords}"
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
