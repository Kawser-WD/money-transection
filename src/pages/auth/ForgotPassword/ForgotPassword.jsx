import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/logo.png";
import ForgotPasswordForm from "../../../components/form/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<ForgotPasswordForm />}
    />
  );
};

export default ForgotPassword;
