import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/manager.png";
import TVForgotPasswordForm from "../../../components/form/TransectionVerifier/TVForgotPasswordForm";
import ManagerForgotPasswordForm from "../../../components/form/Manager/ManagerForgotPasswordForm";

const ManagerForgotPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<ManagerForgotPasswordForm />}
    />
  );
};

export default ManagerForgotPassword;
