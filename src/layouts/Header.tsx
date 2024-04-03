import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-10">
      <div className="flex items-center gap-2 max-w-6xl mx-auto">
        <Coffee className="text-sky-600" width={32} height={32} />
        <h2 className="text-sky-600 font-bold text-xl leading-6">
          Restaurant App
        </h2>
      </div>
    </header>
  );
}
