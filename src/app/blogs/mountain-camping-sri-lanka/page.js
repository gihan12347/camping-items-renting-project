import Link from "next/link";
import Image from "next/image";
import GoogleAd from "../../components/adsence.js";

const src =
  "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=560&fit=crop&q=80";

export default function MountainCampingPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-1 sm:px-0 lg:mx-0">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Sri Lanka · Hill country
        </p>
        <h1 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl text-balance">
          Hill country &amp; mountain-style camping
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          <strong>Ella</strong>, <strong>Haputale</strong>, and{" "}
          <strong>Nuwara Eliya</strong> feel worlds away from the beach: misty ridges,
          tea estates, and nights cool enough that a summer-only sleeping bag from{" "}
          <strong>Europe</strong> or the southern <strong>USA</strong> may not be
          enough. National parks and reserves (for example near{" "}
          <strong>Horton Plains</strong> or the <strong>Knuckles</strong>) need
          permits and often guided access—plan licensed camps or lodges instead of
          informal wild camping in sensitive habitat.
        </p>
      </header>

      <figure className="mb-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200/80">
        <Image
          src={src}
          alt="Tea hills and mist evoking Sri Lanka mountain camping and hill country"
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
          Trains and tuk-tuks make ridge viewpoints reachable without a car culture
          like rural America—still pack layers, rain shell, and headlamp. Rent a warmer
          sleep system with your{" "}
          <Link href="/blogs/rent-camping-gear-sri-lanka">tent and gear bundle</Link>{" "}
          if you are coming straight from the coast.
        </p>
        <p className="text-gray-700 leading-relaxed">
          See the big picture in our{" "}
          <Link href="/blogs">USA &amp; Europe island camping guide</Link> and coastal
          tips on{" "}
          <Link href="/blogs/beach-camping-sri-lanka">beach &amp; coast camping</Link>.
        </p>
      </div>

      <div className="not-prose mt-10 rounded-xl border border-gray-200/80 bg-white/90 p-4 shadow-sm">
        <GoogleAd />
      </div>
    </article>
  );
}
