import { ButtonMonoGallery } from "@/components/ButtonMonoGallery";
import { Divider } from "@/components/Divider";
import { MonoPickup } from "@/components/MonoPickup";
import { useFetchItems } from "@/hooks/useFetchItems";

export default function Home() {
  return (
    <div>
      <MonoPickup />
      <Divider />
      <ButtonMonoGallery />
    </div>
  );
}
