import React from "react";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/transection-logo.png";
import TVVerifyPhoneNumberForm from "../../../components/form/TransectionVerifier/TVVerifyPhoneNumberForm";
const TVVerifyPhoneNumber = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<TVVerifyPhoneNumberForm />}
    />
  );
};

export default TVVerifyPhoneNumber;
