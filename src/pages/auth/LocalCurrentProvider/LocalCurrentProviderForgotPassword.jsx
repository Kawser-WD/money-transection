import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/lcp.png";
import TVForgotPasswordForm from "../../../components/form/TransectionVerifier/TVForgotPasswordForm";
import LCPForgotPasswordForm from "../../../components/form/LocalCurrentProvider/LCPForgotPasswordForm";

const LocalCurrentProviderForgotPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<LCPForgotPasswordForm />}
    />
  );
};

export default LocalCurrentProviderForgotPassword;
