import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import { formatPrice } from "@/lib/format";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};

  return {
    title: `${destination.name} | SIROCCO`,
    description: destination.vibe,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 pb-20 pt-28 sm:px-7">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/#destinations" className="hover:text-ink">
          Destinations
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{destination.name}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-[3fr_2fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.region}`}
            width={1200}
            height={900}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
            {destination.name}
          </h1>
          <p className="mt-1 text-sm text-muted">{destination.region}</p>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink/85">
            {destination.vibe}
          </p>
          <p className="mt-4 text-lg font-medium text-amber">
            from {formatPrice(destination.fromPrice)} per person
          </p>

          <dl className="mt-6 grid gap-3">
            {destination.facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-ink/10 bg-shell/60 px-4 py-3">
                <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/#concierge"
            className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-shell shadow-coral"
          >
            Design this trip
          </Link>

          <p className="mt-6 text-xs text-muted">
            Image:{" "}
            <a
              href={destination.credit.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-2 hover:text-ink"
            >
              {destination.credit.author}
            </a>
            , {destination.credit.license}
          </p>
        </div>
      </div>
    </main>
  );
}
