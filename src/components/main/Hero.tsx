import { Input } from "../ui/input";

export default function Hero() {
  return (
    <div className="relative">
      <div className="h-[420px] bg-[url('/assets/hero.webp')] bg-cover bg-center brightness-50 opacity-90" />

      <div className="absolute inset-0 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-white text-4xl leading-6 font-bold drop-shadow">
          Find Restaurants Near You
        </h1>

        <Input
          className="bg-white/40 w-[300px] shadow-xl placeholder:text-slate-200/90 text-white rounded-3xl px-4"
          placeholder="Search restaurant"
        />
      </div>
    </div>
  );
}
