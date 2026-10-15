import Link from "next/link";

export function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden">
      <Link
        href="#concierge"
        className="rounded-full bg-coral px-5 py-3 text-sm font-semibold text-shell shadow-coral"
      >
        Request Itinerary
      </Link>
    </div>
  );
}
