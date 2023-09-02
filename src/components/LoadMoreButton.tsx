type Props = {
  onLoadMore: () => void;
};

export default function LoadMoreButton(props: Props) {
  return (
    <button
      className="p-4 border-2 border-blue-950 hover:bg-gray-100"
      onClick={props.onLoadMore}
    >
      LOAD MORE
    </button>
  );
}
