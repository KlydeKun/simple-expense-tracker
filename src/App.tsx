import axios from "axios";
import { useState, useEffect, useRef } from "react";
import ExpenseFormList from "./components/ExpenseFormList";
import SchemaExpenseForm from "./components/SchemaExpenseForm";
import { schema } from "./validationSchema";
import { z } from "zod";
import { Toast } from "primereact/toast";

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

type FormData = z.infer<typeof schema>;

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const showData = async () => {
      const response = await axios.get<UserType[]>(
        "http://localhost:3000/users"
      );
      setUsers(response.data);
    };

    showData();
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const show = await axios.post("http://localhost:3000/users", data);
      showSuccess();
      setUsers((prevUsers) => [...prevUsers, show.data]);
    } catch (error) {
      showError();
    }
  };

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "User Added Successfully!",
      life: 3000,
    });
  };

  const showError = () => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: "Unexpected error occured!",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:space-x-5">
        <SchemaExpenseForm onSubmit={onSubmit} />
        <ExpenseFormList users={users} onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default App;
