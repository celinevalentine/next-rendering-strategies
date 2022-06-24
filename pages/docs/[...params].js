import React from "react";
import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  return <div>Doc details based on these {params}</div>;
};

export default Doc;
