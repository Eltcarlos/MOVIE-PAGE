interface Props {
  text: string | number;
}

export const InlineError = ({ text }: Props) => {
  return (
    <div className="text-alert w-full mt-2 text-xs ">
      <p>{text}</p>
    </div>
  );
};
