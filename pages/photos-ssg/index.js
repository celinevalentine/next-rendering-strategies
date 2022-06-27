import React from "react";
import Image from "next/image";
import Photo from "../../components/Photo";
import Link from "next/link";

const Photos = ({ photos }) => {
  return (
    <>
      <h1>list of photos Rendered by SSG (Static Site Generation) with data</h1>
      <hr />
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h2>Pros</h2>
      <li>pre-rendered HTML + JSON at build time</li>
      <li>Everything can be cached on CDN, fast load for users</li>
      <li>Great for SEO (HTML code accessible via source code)</li>
      <li>
        great for security/hiding secrets as getStaticProps only runs on the
        server side
      </li>
      <h2>Cons</h2>
      <li>build time increases along with pages</li>
      <li>
        having stale data and changes will require rebuild for the entire app
      </li>
      <h2>Use cases</h2>
      <li>blogs, marketing, eCommerce product page, documentation</li>

      <hr />
      <h1>List of Photos</h1>

      {photos.map((photo) => {
        return (
          <>
            <Link href={`/photos-ssg/${photo.id}`}>
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
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      photos: data.slice(0, 10),
    },
  };
}
