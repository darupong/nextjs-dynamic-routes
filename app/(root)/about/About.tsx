import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Space } from "antd";
import Link from "next/link";

interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const About = () => {
  const api = "https://jsonplaceholder.typicode.com/posts";
  const [info, setInfo] = useState<IUser[]>([]);

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
  }, []);

  return (
    <div>
      <Space direction="horizontal" size={16}>
        {info.map((e) => (
          <Card
            key={e.id} // ใส่ key ในการ map
            title="Default size card"
            extra={<Link href={`/about/${e.id}`}>More</Link>}
            style={{ width: 300 }}
          >
            <p>{e.title}</p>
            <p>{e.body}</p>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default About;
