import logo from "../../../assets/Logo/lcp.png";
import LCPSignUpForm from "../../../components/form/LocalCurrentProvider/LCPSignUpForm";
import TransectionVerifierSignUpForm from "../../../components/form/TransectionVerifier/TransectionVerifierSignUpForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const LocalCurrentProviderSignUp = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<LCPSignUpForm />}
    />
  );
};

export default LocalCurrentProviderSignUp;
