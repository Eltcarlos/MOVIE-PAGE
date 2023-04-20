import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { LoginValidation } from "../components/validation/UserValidation";
import { Inputs } from "../components/Form/Inputs";
import { CheckBox } from "../components/Form/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { startSignIn } from "../store/auth/thunks";
import { useEffect } from "react";
import { state } from "../interfaces/state";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status } = useSelector((state: state) => state.authState);

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/home");
    }
  }, [status, navigate]);

  return (
    <section className=" bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-5 flex rounded-2xl shadow-lg max-w-3xl">
        <div className="md:w-1/2 px-5">
          <Formik
            initialValues={{
              email: "",
              password: "",
              remember: false,
            }}
            onSubmit={(values) => {
              dispatch(startSignIn(values) as any);
            }}
            validationSchema={LoginValidation}
          >
            {(formik) => (
              <Form className="mt-6">
                <div>
                  <Inputs label="Email Address" name="email" type="email" placeholder="test@gmail.com" />
                </div>
                <div className="mt-4">
                  <Inputs label="Password" name="password" type="password" placeholder="********" />
                </div>
                <div className="space-x-2">
                  <CheckBox label="Remember me" name="remember" />
                </div>
                <button
                  type="submit"
                  className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6"
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
            <span className="ml-4">Register</span>
          </button>
        </div>

        <div className="w-1/2 md:block hidden ">
          <img
            src="https://movieprodportalstoweb.blob.core.windows.net/movieposters/amorytrueno.jpg"
            className="rounded-2xl"
            alt="page img"
          />
        </div>
      </div>
    </section>
  );
};
