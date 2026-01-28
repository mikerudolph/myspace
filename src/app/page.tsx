import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#EEF1F4] p-6">
      <div
        className="mx-auto flex max-w-lg justify-center"
        style={{
          borderRadius: 24,
          padding: 18,
        }}
      >
        <div className="w-full overflow-hidden rounded-[28px] border border-[#E2E2DE] bg-[#F4F4F2]">
          <div className="relative h-44 rounded-t-[28px]">
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 1200 420"
                className="h-full w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  {/* matte paper header */}
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#E6E6E3" />
                    <stop offset="0.5" stopColor="#F0F0EE" />
                    <stop offset="1" stopColor="#E6E6E3" />
                  </linearGradient>
                </defs>

                <rect width="1200" height="420" fill="url(#g)" />

                {Array.from({ length: 12 }).map((_, i) => {
                  const r = 220 + i * 42;
                  return (
                    <path
                      key={i}
                      d={`M -80 ${380 - i * 6} A ${r} ${r} 0 0 1 1280 ${
                        380 - i * 6
                      }`}
                      fill="none"
                      stroke="url(#stroke)"
                      strokeWidth={18}
                      opacity={0.22 - i * 0.01}
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
            </div>

            <div className="absolute left-8 -bottom-12">
              <div className="h-24 w-24 overflow-hidden rounded-full bg-[#E6E6E3] ring-[6px] ring-[#F4F4F2]">
                <Image
                  src="/img/avatar.jpg"
                  alt="Mike Rudolph"
                  width={200}
                  height={200}
                  draggable={false}
                  className="h-full w-full select-none rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="px-8 pb-8 pt-16">
            <h1 className="text-[28px] font-extrabold tracking-tight text-[#2A2A28]">
              Mike Rudolph
            </h1>

            <div className="mt-1 text-sm font-semibold text-[#4E4E4B]">
              I&apos;m a software developer from Canada,
              <br />
              currently leading Innovation at REDspace.
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-[#6F6F6C]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[#E86A3A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>Nova Scotia, Canada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

