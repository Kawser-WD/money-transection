import logo from "../../../assets/Logo/logo.png";
import SignUpForm from "../../../components/form/SignUpForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const SignUp = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<SignUpForm />}
    />
  );
};

export default SignUp;
