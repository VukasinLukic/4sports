import { CheckIcon } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 lg:py-40 overflow-hidden text-neutral-800 dark:text-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="mb-4 text-6xl tracking-tighter text-neutral-900 dark:text-white">
            Pricing &amp; Plans
          </h2>
          <p className="text-xl tracking-tight text-neutral-800 dark:text-neutral-200">
            Use and reuse tons of responsive sections to create the perfect
            layout. Sections are ready.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          <div className="w-full sm:w-72 md:w-64 lg:w-72">
            <div className="group relative h-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500 overflow-hidden">
              {/* Grain texture overlay */}
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '128px 128px'
              }} />
              <div className="relative p-6 border-b border-neutral-300 dark:border-neutral-600">
                <div className="pr-5">
                  <h4 className="mb-3 text-3xl tracking-tighter text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">Solo</h4>
                  <p className="mb-1 text-base font-semibold tracking-tight text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                    From $29/mo
                  </p>
                  <p className="tracking-tight text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                    The ideal plan for larger businesses who require heavy
                    usage.
                  </p>
                </div>
              </div>
              <div className="relative p-6 pb-5">
                <ul className="-m-0.5 mb-5">
                  <FeatureItem>50 Users</FeatureItem>
                  <FeatureItem>Unlimited Projects</FeatureItem>
                  <FeatureItem>Project Schedule</FeatureItem>
                  <FeatureItem>150+ Integrations</FeatureItem>
                  <FeatureItem>Priority Email Support</FeatureItem>
                </ul>
                <PricingButton noCardRequired={true}>
                  Try 14 Days Free Trial
                </PricingButton>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-72 md:w-64 lg:w-72">
            <div
              className="group relative p-px overflow-hidden rounded-2xl hover:-translate-y-2 transition duration-500 transform-gpu"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 25%, #047857 50%, #1f2937 75%, #111827 100%)",
              }}
            >
              <div className="h-full bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
                <div
                  className="relative p-6"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #059669 25%, #047857 50%, #1f2937 75%, #111827 100%)",
                  }}
                >
                  {/* Grain texture overlay */}
                  <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px'
                  }} />
                  <div className="pr-5 relative">
                    <h4 className="mb-3 text-3xl text-white tracking-tighter">
                      Startup
                    </h4>
                    <p className="mb-1 text-base text-white font-semibold tracking-tighter">
                      From $99/mo
                    </p>
                    <p className="text-white tracking-tight text-sm">
                      The ideal plan for larger businesses who require heavy
                      usage.
                    </p>
                  </div>
                </div>
                <div className="relative p-6 pb-5">
                  {/* Grain texture overlay */}
                  <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px'
                  }} />
                  <ul className="-m-0.5 mb-5">
                    <FeatureItem>50 Users</FeatureItem>
                    <FeatureItem>Unlimited Projects</FeatureItem>
                    <FeatureItem>Project Schedule</FeatureItem>
                    <FeatureItem>150+ Integrations</FeatureItem>
                    <FeatureItem>Priority Email Support</FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true}>
                    Try 14 Days Free Trial
                  </PricingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-72 md:w-64 lg:w-72">
            <div className="group relative flex flex-col justify-between h-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500 overflow-hidden">
              {/* Grain texture overlay */}
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '128px 128px'
              }} />
              <div className="relative p-6 border-neutral-300 dark:border-neutral-600">
                <div className="pr-5">
                  <h4 className="mb-3 text-3xl tracking-tighter text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">Custom</h4>
                  <p className="mb-1 text-base font-semibold tracking-tighter text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                    From $399/mo
                  </p>
                  <p className="tracking-tight text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                    We can customize a plan that suits the exact needs of your
                    business.
                  </p>
                </div>
              </div>
              <div className="relative p-6 pb-5">
                <PricingButton>Contact sales</PricingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center py-0.5">
      <CheckIcon className="size-2.5 mr-2 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300" />
      <span className="font-medium tracking-tight text-xs text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">{children}</span>
    </li>
  );
};

const PricingButton = ({
  children,
  href,
  noCardRequired,
}: {
  children: string;
  href?: string;
  noCardRequired?: boolean;
}) => {
  return (
    <>
      <a
        className="inline-block px-4 py-3 w-full text-center text-sm font-semibold tracking-tight bg-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-900 hover:text-white border dark:hover:bg-white dark:hover:text-neutral-800 hover:scale-105 border-neutral-400 dark:border-neutral-600 rounded-lg transition duration-200"
        href={href ?? ""}
      >
        {children}
      </a>
      {noCardRequired && (
        <span className="block mt-2 text-xs text-neutral-500 dark:text-neutral-600 tracking-tight">
          No credit card required
        </span>
      )}
    </>
  );
};
