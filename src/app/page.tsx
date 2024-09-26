"use client";
import { MonoGallery } from "@/components/MonoGallery";
import { Divider } from "@/components/Divider";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { MonoPickup } from "@/components/MonoPickup";
import { RecoilRoot } from "recoil";
import { AppExplanation } from "@/components/AppExplanation";

export default function Home() {
  return (
    <RecoilRoot>
      <AppExplanation />
      <Divider />
      <MonoPickup />
      <Divider />
      <MonoGallery />
      <FloatingActionButton />
    </RecoilRoot>
  );
}
