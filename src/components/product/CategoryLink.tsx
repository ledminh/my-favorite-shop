import Link from "next/link";

type CategoryLinkProps = {
  link?: string;
  name?: string;
  skeleton?: boolean;
};

const CategoryLink = ({ link, name, skeleton }: CategoryLinkProps) => {
  if (skeleton) {
    return <Skeleton />;
  }

  if (!link || !name) {
    throw new Error("Product's category not found");
  }

  return (
    <Link
      className="pb-1 pl-2 ml-4 font-semibold text-blue-700 border-b-2 border-transparent hover:border-blue-700 group"
      href={link}
    >
      <span
        aria-hidden="true"
        className="inline-block transition-all duration-150 group-hover:-translate-x-2"
      >
        {" "}
        &larr;
      </span>{" "}
      Go back to {name}
    </Link>
  );
};

export default CategoryLink;

/*******************
 * Components
 */
const Skeleton = () => {
  return (
    <div className="ml-4 inline-block rounded-md bg-blue-700/25 w-[200px] h-6" />
  );
};
