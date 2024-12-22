import React from "react";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/logo.png";
import VerifyPhoneNumberForm from "../../../components/form/VerifyPhoneNumberForm";
const VerifyPhoneNumber = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<VerifyPhoneNumberForm />}
    />
  );
};

export default VerifyPhoneNumber;
