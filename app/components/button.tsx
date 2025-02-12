export default function Button({ buttonName }: { buttonName: string }) {
  return (
    <button className="bg-neutral-900 text-neutral-100 text-lg px-6 py-3 rounded-2xl border-none">
      {buttonName}
    </button>
  );
}
