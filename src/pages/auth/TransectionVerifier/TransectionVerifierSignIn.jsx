import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/transection-logo.png";
import TransectionSignInForm from "../../../components/form/TransectionVerifier/TransectionSignInform";
const TransectionVerifierSignIn = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<TransectionSignInForm />}
    />
  );
};

export default TransectionVerifierSignIn;
