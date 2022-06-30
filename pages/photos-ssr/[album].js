import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const PhotoDetailByAlbumn = ({ photos, album }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <Link href={"/photos-ssr"}>
        <a>Back to Photos-SSR</a>
      </Link>
      <h1>List of Photos by {album}</h1>
      {photos.map((photo) => {
        return (
          <div key={photo.id}>
            <p>photo #: {photo.id}</p>
            <p>title: {photo.title}</p>
            <p>url: {photo.url}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PhotoDetailByAlbumn;

export async function getServerSideProps(context) {
  const { params } = context;
  const { album } = params;

  const response = await fetch(`http://localhost:3000/api/photos`);

  const data = await response.json();
  console.log("data", data);
  // if (!data.id) {
  //   return {
  //     notFound: true,
  //   };
  // }
  const photo = data.filter((photo) => {
    if (photo.album === album) {
      return photo;
    }
  });
  console.log("filter photo", photo);
  return {
    props: {
      photos: photo,
      album,
    },
  };
}
