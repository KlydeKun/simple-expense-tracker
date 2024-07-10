import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { UserType } from "../App";
import { Button } from "primereact/button";
import InputSwitchButton from "./InputSwitchButton";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import EditForm from "./EditForm";
import { z } from "zod";
import { schema } from "../validationSchema";

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
  users: UserType[];
}

const ExpenseFormList = ({ onSubmit, users }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const showDialog = () => {
    setShow(true);
  };

  const handleDialog = () => {
    setShow(false);
  };

  const ActionButtons = () => {
    return (
      <div className="flex items-center">
        <Button
          rounded
          text
          icon="pi pi-user-edit"
          className="mr-2"
          size="large"
          style={{ color: "black" }}
          onClick={showDialog}
        />
        <InputSwitchButton />
      </div>
    );
  };

  return (
    <>
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
          <Column header="Action" body={ActionButtons} />
        </DataTable>
      </div>
      <Dialog visible={show} onHide={handleDialog}>
        <EditForm onSubmit={onSubmit} />
      </Dialog>
    </>
  );
};

export default ExpenseFormList;
