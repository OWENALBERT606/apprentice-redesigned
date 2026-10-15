import Image from "next/image";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center max-w-lg">
        <Image
          src="/logo.png"
          alt="APPRENTICE logo"
          width={140}
          height={131}
          priority
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#0b2a5b]">
          APPRENTICE
        </h1>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-blue-600">
          South Sudan
        </p>
        <div className="mx-auto my-8 h-px w-16 bg-blue-200" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          We&apos;re under maintenance
        </h2>
        <p className="mt-3 text-gray-600">
          Our website is currently undergoing scheduled maintenance. We&apos;ll be
          back shortly. Thank you for your patience.
        </p>
      </div>
    </main>
  );
}
