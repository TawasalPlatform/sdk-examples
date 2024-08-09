import { getTawasal } from "@/lib/tawasal-cookie";
import { getDictionary } from "@/lib/i18n";
import {Component} from "@/app/component";

export default async function Home({
}: {
}) {
  const tawasal = getTawasal();

  return (
    <div className="w-full overflow-auto p-4">
      {JSON.stringify(tawasal, null, 2)}
      <Component />
    </div>
  );
}
