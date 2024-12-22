import React from "react";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/manager.png";
import ManagerVerifyPhoneNumberForm from "../../../components/form/Manager/ManagerverifyPhoneNumberForm";
const ManagerVerifyPhoneNumber = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<ManagerVerifyPhoneNumberForm />}
    />
  );
};

export default ManagerVerifyPhoneNumber;
