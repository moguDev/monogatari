"use client";
import { MonoGallery } from "@/components/MonoGallery";
import { Divider } from "@/components/Divider";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { MonoPickup } from "@/components/MonoPickup";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <MonoPickup />
      <Divider />
      <MonoGallery />
      <FloatingActionButton />
    </RecoilRoot>
  );
}
