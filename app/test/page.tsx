import { Spotlight } from "@/components/ui/spotlight";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    </div>
  );
}
