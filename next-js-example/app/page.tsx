import { getTawasal } from "@/lib/tawasal-cookie";
import { getDictionary } from "@/lib/i18n";

export default async function Home({
}: {
}) {
  const tawasal = getTawasal();

  return (
    <div className="w-full overflow-auto p-4">
      {JSON.stringify(tawasal, null, 2)}
    </div>
  );
}
