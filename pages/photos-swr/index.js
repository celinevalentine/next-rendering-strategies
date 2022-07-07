import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const Dashboard = () => {
  const router = useRouter();
  const { data, error } = useSwr(`/api/dashboard`, fetcher);
  console.log("swr-data", data);
  console.log(error);
  if (error) return "error occured";
  if (!data) return "loading...";

  return (
    <>
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h1>
        list of photos Rendered by SWR (Server Side Regeneration) with data
      </h1>
      <hr />
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h2>Pros</h2>
      <li>
        More effective than SSR, no need to use useEffect hook to fetch data
      </li>
      <li>data automatcially refreshed on the page without refreshing</li>
      <h2>Cons</h2>
      <li>Bad SEO</li>
      <li>
        No pre-rendering, might takes long time for users to see the pages
      </li>
      <h2>Use cases</h2>
      <li>
        personalized private data such as dashboard page whereas SEO is not
        important
      </li>

      <hr />
      <h1>My Dashboard</h1>
      <div>
        <p>posts: {data.posts}</p>
        <p>likes:{data.likes}</p>
        <p>followers: {data.followers}</p>
        <p>followed: {data.followed}</p>
      </div>
    </>
  );
};

export default Dashboard;
