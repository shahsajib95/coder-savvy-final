import Link from 'next/link'
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
    </div>
  );
};

export default NotFound;
