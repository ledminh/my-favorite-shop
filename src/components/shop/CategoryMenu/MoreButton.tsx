type MoreButtonProps = {
  setIsMenuOpen: (value: boolean) => void;
};

const MoreButton = ({ setIsMenuOpen }: MoreButtonProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center w-20 gap-1 p-1 text-center border rounded-md border-blue-950 hover:bg-black/20"
      onClick={() => setIsMenuOpen(true)}
    >
      <span>... MORE</span>
    </button>
  );
};

export default MoreButton;
