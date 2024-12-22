import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/logo.png";
import SignInForm from "../../../components/form/SignInForm";
const SignIn = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<SignInForm />}
    />
  );
};

export default SignIn;
