import logo from "../../../assets/Logo/lcp.png";
import LcpResetPasswordForm from "../../../components/form/LocalCurrentProvider/LcpResetPasswordForm";
import TVResetPasswordForm from "../../../components/form/TransectionVerifier/TVResetPasswordForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const LocalCurrentProviderResetPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<LcpResetPasswordForm />}
    />
  );
};

export default LocalCurrentProviderResetPassword;
