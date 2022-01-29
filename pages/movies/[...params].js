import { useRouter } from "next/router";

export default function Details({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return <h1>{title}</h1>;
}
// movies/123123123

export async function getServerSideProps({ params: { params } }) {
  // console.log(ctx); can get params coooool not for patch just get faster
  return {
    props: {
      params,
    },
  };
}
