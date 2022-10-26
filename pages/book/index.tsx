import Error from "next/error";

export default function Book() {
  return <Error statusCode={404} />;
}
