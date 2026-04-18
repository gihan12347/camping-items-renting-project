import Link from "next/link";
import Image from "next/image";
import GoogleAd from "../../components/adsence.js";

const src =
  "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=1200&h=560&fit=crop&q=80";

export default function RentGearBlogPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-1 sm:px-0 lg:mx-0">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Practical · Gear
        </p>
        <h1 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl text-balance">
          Rent camping gear in Sri Lanka (USA &amp; Europe travelers)
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Long-haul guests often prefer{" "}
          <strong>outdoor camping equipment hire</strong> over checked bags full of
          poles and pegs. When you <strong>rent camping tent online</strong>, confirm
          capacity, rainfly, footprint, and whether pickup suits your Colombo or
          south-coast dates. The <strong>best camping tents for beginners</strong> are
          still the ones you can pitch once in daylight—especially before a coastal
          breeze picks up.
        </p>
      </header>

      <figure className="mb-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200/80">
        <Image
          src={src}
          alt="Camping tent outdoors representing tent rental Sri Lanka for travelers"
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
          Pair <strong>tent rental Sri Lanka</strong> with lights, cooler, and stove if
          you are self-catering between beaches and Ella. Nature Nest Camping lists
          ready-made kits on{" "}
          <Link href="/gear-rental">gear rentals</Link>—start there, then read{" "}
          <Link href="/blogs">the full island guide</Link> for route ideas.
        </p>
      </div>

      <div className="not-prose mt-10 rounded-xl border border-gray-200/80 bg-white/90 p-4 shadow-sm">
        <GoogleAd />
      </div>
    </article>
  );
}
