type Props = {
  title: string;
};

function CustomButton({ title }: Props) {
  return (
    <button className="text-stone-50 font-bold bg-blue-600 rounded-md w-max h-12 px-6">
      {title}
    </button>
  );
}

export default CustomButton;
