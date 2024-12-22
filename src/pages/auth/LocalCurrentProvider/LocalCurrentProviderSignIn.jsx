import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/lcp.png";
import LCPSignInForm from "../../../components/form/LocalCurrentProvider/LCPSignInForm";
const LocalCurrentProviderSignIn = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<LCPSignInForm />}
    />
  );
};

export default LocalCurrentProviderSignIn;
