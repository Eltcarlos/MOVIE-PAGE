import { useField } from "formik";
import { InlineError } from "../Notifications/Error";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const Inputs = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="block text-gray-700">{label}</label>
      <input
        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <InlineError text={meta.error} />}
    </>
  );
};
