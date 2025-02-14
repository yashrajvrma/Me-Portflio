export default function Button({ buttonName }: { buttonName: string }) {
  return (
    <button className="bg-neutral-900 text-neutral-50 text-lg font-switzer font-semibold px-6 py-3 rounded-2xl border-none">
      {buttonName}
    </button>
  );
}
