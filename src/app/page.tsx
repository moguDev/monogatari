import { ButtonMonoGallery } from "@/components/ButtonMonoGallery";
import { Divider } from "@/components/Divider";
import { MonoPickup } from "@/components/MonoPickup";

export default function Home() {
  return (
    <div>
      <MonoPickup />
      <Divider />
      <ButtonMonoGallery />
    </div>
  );
}
