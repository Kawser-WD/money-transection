import React from "react";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/lcp.png";
import TVVerifyPhoneNumberForm from "../../../components/form/TransectionVerifier/TVVerifyPhoneNumberForm";
import LcpVerifyPhoneNumberForm from "../../../components/form/LocalCurrentProvider/LcpverifyPhoneNumberForm";
const LocalCurrentProviderVerifyPhoneNumber = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<LcpVerifyPhoneNumberForm />}
    />
  );
};

export default LocalCurrentProviderVerifyPhoneNumber;
