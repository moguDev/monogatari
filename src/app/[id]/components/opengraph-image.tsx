import { ImageResponse } from "next/og";

export default async function OpengraphImage({
  params,
}: {
  params: { id: string };
}) {
  return new ImageResponse(<div></div>, {
    width: 1200,
    height: 630,
  });
}
