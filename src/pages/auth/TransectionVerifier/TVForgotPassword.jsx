import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/transection-logo.png";
import TVForgotPasswordForm from "../../../components/form/TransectionVerifier/TVForgotPasswordForm";

const TVForgotPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<TVForgotPasswordForm />}
    />
  );
};

export default TVForgotPassword;
