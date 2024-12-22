import logo from "../../../assets/Logo/transection-logo.png";
import TVResetPasswordForm from "../../../components/form/TransectionVerifier/TVResetPasswordForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const TVResetPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<TVResetPasswordForm />}
    />
  );
};

export default TVResetPassword;
