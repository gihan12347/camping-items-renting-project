import Link from "next/link";
import Image from "next/image";
import GoogleAd from "../../components/adsence.js";

const src =
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=560&fit=crop&q=80";

export default function BeachCampingPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-1 sm:px-0 lg:mx-0">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Sri Lanka · Coast
        </p>
        <h1 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl text-balance">
          Beach &amp; coast camping in Sri Lanka
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          For travelers from the <strong>USA</strong> and <strong>Europe</strong>, the
          south coast (roughly November–April) and the east around{" "}
          <strong>Arugam Bay</strong> in opposite months offer warm water, surf, and
          long sunsets. Pair famous stops like <strong>Mirissa</strong>,{" "}
          <strong>Weligama</strong>, <strong>Hiriketiya</strong>, and{" "}
          <strong>Tangalle</strong> with <strong>eco-camps</strong>, surf camps, or
          small resorts that allow tents—rather than pitching on unclear public land.
        </p>
      </header>

      <figure className="mb-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200/80">
        <Image
          src={src}
          alt="Tropical sea and coastline in Sri Lanka beach camping context"
          width={1200}
          height={560}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
          priority
          unoptimized
        />
      </figure>

      <div className="prose prose-gray max-w-none prose-a:text-emerald-700">
        <p className="text-gray-700 leading-relaxed">
          Humidity and sudden rain mean a ventilated tent and a groundsheet matter as
          much as on a humid US Gulf coast trip. Use{" "}
          <Link href="/gear-rental">camping gear rental Sri Lanka</Link> so you are
          not dragging poles through multiple flights. Respect turtle nesting areas,
          take reef-safe sunscreen, and carry drinking water on exposed beaches.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When you are ready to mix coast with cool hills, read the full{" "}
          <Link href="/blogs">island guide for USA &amp; Europe travelers</Link> and
          our <Link href="/blogs/mountain-camping-sri-lanka">hill-country camping</Link>{" "}
          notes.
        </p>
      </div>

      <div className="not-prose mt-10 rounded-xl border border-gray-200/80 bg-white/90 p-4 shadow-sm">
        <GoogleAd />
      </div>
    </article>
  );
}
