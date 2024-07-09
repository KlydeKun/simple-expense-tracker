import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { UserType } from "../App";

interface Props {
  users: UserType[];
}

const ExpenseFormList = ({ users }: Props) => {
  // const showData = async () => {
  //   await axios
  //     .get<UserType[]>("http://localhost:3000/users")
  //     .then((response) => {
  //       return setUsers(response.data);
  //     });
  // };

  // useEffect(() => {
  //   showData();
  // }, []);

  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        rows={20}
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
