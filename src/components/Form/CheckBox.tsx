import { useField } from "formik";
import { InlineError } from "../Notifications/Error";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const CheckBox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <div className=" text-gray-700 flex flex-row space-x-2 justify-end ">
        <input type="checkbox" {...field} {...props} />
        <h1> {label}</h1>
      </div>
      {meta.touched && meta.error && <InlineError text={meta.error} />}
    </>
  );
};
