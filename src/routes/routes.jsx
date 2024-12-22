import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn/SignIn";
import ForgotPassword from "../pages/auth/ForgotPassword/ForgotPassword";
import VerifyPhoneNumber from "../pages/auth/VerifyPhoneNumber/VerifyPhoneNumber";
import ResetPassword from "../pages/auth/ResetPassword/ResetPassword";
import SignUp from "../pages/auth/SignUp/SignUp";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import OrderTable from "../components/OrderTable/OrderTable";
import TwoFAToken from "../pages/auth/TwoFAToken/TwoFAToken";
import TransectionVerifierSignIn from "../pages/auth/TransectionVerifier/TransectionVerifierSignIn";
import TransectionVerifierSignUp from "../pages/auth/TransectionVerifier/TransectionVerifierSignUp";
import TVForgotPassword from "../pages/auth/TransectionVerifier/TVForgotPassword";
import TVVerifyPhoneNumber from "../pages/auth/TransectionVerifier/TVVerifyPhoneNumber";
import TVResetPassword from "../pages/auth/TransectionVerifier/TVResetPassword";
import TVTFAToken from "../pages/auth/TransectionVerifier/TVTFAToken";
import TVDashboard from "../pages/TVDashboard/TVDashboard";
import TVTable from "../pages/TVDashboard/TVTable";
import LocalCurrentProviderSignIn from "../pages/auth/LocalCurrentProvider/LocalCurrentProviderSignIn";
import LocalCurrentProviderSignUp from "../pages/auth/LocalCurrentProvider/LocalCurrentProviderSignUp";
import LCPForgotPasswordForm from "../components/form/LocalCurrentProvider/LCPForgotPasswordForm";
import LocalCurrentProviderForgotPassword from "../pages/auth/LocalCurrentProvider/LocalCurrentProviderForgotPassword";
import LocalCurrentProviderVerifyPhoneNumber from "../pages/auth/LocalCurrentProvider/LocalCurrentProviderVerifyPhoneNumber";
import LocalCurrentProviderResetPassword from "../pages/auth/LocalCurrentProvider/LocalCurrentProviderResetPassword";
import LcpDashboard from "../pages/LcpDashboard/LcpDashboard";
import LcpTable from "../pages/LcpDashboard/LcpTable";
import ManagerSignIn from "../pages/auth/manager/ManagerSignIn";
import ManagerForgotPassword from "../pages/auth/manager/ManagerForgotPassword";
import ManagerVerifyPhoneNumber from "../pages/auth/manager/ManagerVerifyPhoneNumber";
import ManagerResetPassword from "../pages/auth/manager/ManagerResetPassword";
import Manager2FAToken from "../pages/auth/manager/Manager2FAToken";
import ManagerSignUp from "../pages/auth/manager/ManagerSignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-phone-number",
    element: <VerifyPhoneNumber />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/2fa-token",
    element: <TwoFAToken />,
  },
  // transection verifier
  {
    path: "/transection-signin",
    element: <TransectionVerifierSignIn />,
  },
  {
    path: "/transection-signUp",
    element: <TransectionVerifierSignUp />,
  },
  {
    path: "/tv-forgot-password",
    element: <TVForgotPassword />,
  },
  {
    path: "/tv-verify-phone-number",
    element: <TVVerifyPhoneNumber />,
  },
  {
    path: "/tv-reset-password",
    element: <TVResetPassword />,
  },
  {
    path: "/tv-2fa-token",
    element: <TVTFAToken />,
  },
  // LCP verifier
  {
    path: "/lcp-signin",
    element: <LocalCurrentProviderSignIn />,
  },
  {
    path: "/lcp-signUp",
    element: <LocalCurrentProviderSignUp />,
  },
  {
    path: "/lcp-forgot-password",
    element: <LocalCurrentProviderForgotPassword />,
  },
  {
    path: "/lcp-verify-phone-number",
    element: <LocalCurrentProviderVerifyPhoneNumber />,
  },
  {
    path: "/lcp-reset-password",
    element: <LocalCurrentProviderResetPassword />,
  },
  {
    path: "/lcp-2fa-token",
    element: <TVTFAToken />,
  },
  // manager
  {
    path: "/manager-signin",
    element: <ManagerSignIn />,
  },
  {
    path: "/manager-signUp",
    element: <ManagerSignUp />,
  },
  {
    path: "/manager-forgot-password",
    element: <ManagerForgotPassword />,
  },
  {
    path: "/manager-verify-phone-number",
    element: <ManagerVerifyPhoneNumber />,
  },
  {
    path: "/manager-reset-password",
    element: <ManagerResetPassword />,
  },
  {
    path: "/manager-2fa-token",
    element: <Manager2FAToken />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/order-table",
        element: <OrderTable />,
      },
      // transection verifier
      {
        path: "/dashboard/tv-dashboard",
        element: <TVDashboard />,
      },
      {
        path: "/dashboard/tv-table",
        element: <TVTable />,
      },
      // LCP dashboard
      {
        path: "/dashboard/lcp-dashboard",
        element: <LcpDashboard />,
      },
      {
        path: "/dashboard/lcp-table",
        element: <LcpTable />,
      },
      // manager dashboard
      {
        path: "/dashboard/manager-dashboard",
        element: <LcpDashboard />,
      },
      {
        path: "/dashboard/manager-table",
        element: <LcpTable />,
      },
    ],
  },
]);
