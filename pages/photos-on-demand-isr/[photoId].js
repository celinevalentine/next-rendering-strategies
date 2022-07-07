import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { database } from "../../db";

const PhotoDetail = ({ photo }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
      <div>Photo Detail of Photo #{photo.id}</div>
      <p>title: {photo.title}</p>
      <p>url: {photo.url}</p>
      {/* <Image src={photo.url} alt={photo.title} /> */}
    </>
  );
};

export default PhotoDetail;

export async function getStaticPaths() {
  const paths = database.photos.map((photo) => {
    return {
      params: {
        photoId: `${photo.id}`,
      },
    };
  });
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { photoId } = params;

  const photo = database.photos.filter((photo) => {
    return Number(photoId) === photo.id;
  });
  console.log("photo", photo);
  return {
    props: {
      photo: photo[0],
    },
  };
}
