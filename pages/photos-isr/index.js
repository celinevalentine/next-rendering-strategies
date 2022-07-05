import React from "react";
import Image from "next/image";
import Photo from "../../components/Photo";
import Link from "next/link";

const Photos = ({ photos }) => {
  return (
    <>
      <h1>
        list of photos Rendered by ISR (Incremental Static Regeneration) with
        data
      </h1>
      <hr />
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h2>Pros</h2>
      <li>Same as SSG but better</li>
      <li>
        Allow to update static pages after build time per page level without
        rebuilding the entire app
      </li>

      <h2>Cons</h2>
      <li>
        Revalidation by time interval is not need basis, might not be efficient
        or practical for time-sensitive data (stock market, news, product sales,
        etc)
      </li>
      <li>
        Regeneration is only triggered if a user makes a request after the
        revalidation time, stale data issue remains in this case
      </li>
      <li>
        can not pre-render user specific page as it requires fetching data at
        each request not build time{" "}
      </li>
      <h2>Use cases</h2>
      <li>blogs, marketing sites that have low traffic</li>

      <hr />
      <h1>List of Photos</h1>

      {photos.map((photo) => {
        return (
          <>
            <Link href={`/photos-isr/${photo.id}`}>
              <p>title: {photo.title}</p>
            </Link>
            <br />
            {/* <Image
              alt={photo.title}
              src={photo.url}
              width={500}
              height={500}
              layout="fill"
            /> */}
          </>
        );
      })}
    </>
  );
};

export default Photos;

export async function getStaticProps() {
  console.log("updating photo info");
  const response = await fetch(
    "http://process.env.BASE_URL/api/photos/api/photos"
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      photos: data.photos,
    },
    revalidate: 50,
  };
}
