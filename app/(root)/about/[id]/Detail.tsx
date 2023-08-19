import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Detail = () => {
  // const router = useRouter(); // ใช้ useRouter แทน useParams
  // const { id } = router.query;
  const params = useParams();
  const { id } = params;

  //   const queryParams = new URLSearchParams(location.search);
  //   const id = queryParams.get("id");
  const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const [info, setInfo] = useState<IUser | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      setInfo(response.data);
    } catch (err) {
      console.error("err =>", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  console.log("id =>", id);
  return (
    <>
      <div>
        <p>{info?.id}</p>
        <p>{info?.body}</p>
        <p>{info?.title}</p>
        <p>{info?.userId}</p>
      </div>
    </>
  );
};

export default Detail;
