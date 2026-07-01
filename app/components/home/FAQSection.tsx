"use client";

import { useLanguage } from "../../providers/LanguageProvider";

function FaqChevron() {
  return (
    <span className="faq-chevron-wrap" aria-hidden>
      <svg
        width={12}
        height={6}
        viewBox="0 0 14.4944 7.36683"
        fill="none"
        style={{ display: "block" }}
      >
        <g transform="matrix(1 0 0 -1 0 7.36683)">
          <path
            d="M0.413952 5.09934L6.7425 0.230223C6.93622 0.073518 7.17999 -0.00800981 7.42901 0.000621369C7.67803 0.00925255 7.91557 0.107463 8.09798 0.277205L14.1206 5.53717C14.2251 5.62387 14.3115 5.73031 14.3749 5.8504C14.4382 5.97049 14.4773 6.10189 14.4899 6.23708C14.5025 6.37228 14.4883 6.50863 14.4482 6.63835C14.4081 6.76807 14.3428 6.88861 14.2561 6.9931C14.1694 7.0976 14.063 7.18399 13.9429 7.24734C13.8228 7.3107 13.6914 7.34978 13.5562 7.36236C13.421 7.37494 13.2846 7.36076 13.1549 7.32065C13.0252 7.28053 12.9046 7.21526 12.8002 7.12855L7.35726 2.37239L1.75343 6.67973C1.65111 6.77724 1.52994 6.85282 1.39736 6.90183C1.26478 6.95084 1.12359 6.97224 0.982438 6.96473C0.84129 6.95722 0.703165 6.92094 0.576538 6.85813C0.449911 6.79532 0.337452 6.70731 0.246061 6.59948C0.15467 6.49165 0.0862731 6.36629 0.0450677 6.23108C0.0038622 6.09587 -0.00928326 5.95367 0.00643778 5.81319C0.0221588 5.67272 0.0664148 5.53695 0.136491 5.41419C0.206566 5.29144 0.300984 5.18429 0.413952 5.09934Z"
            fill="#FF832A"
          />
        </g>
      </svg>
    </span>
  );
}

function FaqDivider() {
  return <div className="h-px w-full bg-[#d9d9d9]" aria-hidden />;
}

export function FAQSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="overflow-hidden bg-white pb-14 pt-16 lg:pb-0 lg:pt-20">
      <div className="mx-auto w-full max-w-[1420px] px-6 lg:px-[138px]">
        <h2 className="m-0 text-center text-[28px] relative top-[40px] font-bold leading-none sm:text-[32px] lg:text-[36px]">
          <span className="text-black">{t.home.faq.headingBefore}</span>
          <span className="text-[#ff832a]">{t.home.faq.headingAccent}</span>
        </h2>

        <div className="mx-auto mt-12 w-full max-w-[709px] lg:mt-[70px]">
          {t.home.faq.questions.map((question, index) => (
            <div key={question}>
              {index > 0 && <FaqDivider />}
              <details>
                <summary className="faq-summary">
                  <span className="faq-spacer" aria-hidden />
                  <span className="faq-question">{question}</span>
                  <FaqChevron />
                </summary>
              </details>
            </div>
          ))}
        </div>

        <div
          className="mx-auto mt-12 h-[5px] w-full max-w-[1644px] bg-[#f07b05] lg:mt-14"
          aria-hidden
        />
      </div>
    </section>
  );
}
