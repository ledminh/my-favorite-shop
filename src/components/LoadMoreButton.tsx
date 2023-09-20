type Props = {
  onLoadMore: () => void;
  loading: boolean;
};

export default function LoadMoreButton(props: Props) {
  return (
    <button
      className="flex items-center justify-center gap-2 p-4 border-2 border-blue-950 hover:bg-gray-100"
      onClick={props.onLoadMore}
    >
      <span>LOAD MORE</span>
      {props.loading && (
        <span className="ml-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </span>
      )}
    </button>
  );
}
