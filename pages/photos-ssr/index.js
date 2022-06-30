import React from "react";
import Link from "next/link";
import Image from "next/image";

const Photos = ({ photos }) => {
  return (
    <>
      <h1>
        list of photos Rendered by SSR (Server Side Regeneration) with data
      </h1>
      <hr />
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <h2>Pros</h2>
      <li>Similar to SSG that pre-renders HTML + JSON but at request time</li>
      <li>Every page can be served updated data with user specific content</li>
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
      <h1>List of Photos</h1>

      {photos.map((photo) => {
        return (
          <>
            <Link href={`/photos-ssr/${photo.album}`}>
              <a>
                photo#:{photo.id} | album: {photo.album}
              </a>
            </Link>
            <p>title: {photo.title}</p>

            <br />
          </>
        );
      })}
    </>
  );
};

export default Photos;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/photos");
  const data = await response.json();

  return {
    props: {
      photos: data,
    },
  };
}
