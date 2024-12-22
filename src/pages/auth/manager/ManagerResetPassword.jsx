import logo from "../../../assets/Logo/manager.png";
import ManagerResetPasswordForm from "../../../components/form/Manager/ManagerResetPasswordForm";
import TVResetPasswordForm from "../../../components/form/TransectionVerifier/TVResetPasswordForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const ManagerResetPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<ManagerResetPasswordForm />}
    />
  );
};

export default ManagerResetPassword;
