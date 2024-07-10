import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import { useState } from "react";

const InputSwitchButton = () => {
  const [unCheck, setUnCheck] = useState<boolean>(false);
  return (
    <>
      <InputSwitch
        checked={unCheck}
        onChange={(e: InputSwitchChangeEvent) => setUnCheck(e.value)}
        className="scale-75"
      />
    </>
  );
};

export default InputSwitchButton;
