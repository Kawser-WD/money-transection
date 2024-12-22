import logo from "../../../assets/Logo/logo.png";
import ResetPasswordForm from "../../../components/form/ResetPasswordForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const ResetPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<ResetPasswordForm />}
    />
  );
};

export default ResetPassword;
