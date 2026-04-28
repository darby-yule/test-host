// Authenticity by Design — Violet Night
import svgPaths from "../imports/svg-buwgyi628p";
import useScrollTop from './hooks/useScrollTop';
import { CaseStudyNav } from './CaseStudyNav';

export default function CaseStudy4() {
  useScrollTop();

  return (
    <div className="bg-[#f1eee7] relative min-h-screen w-full">
      {/* CASE STUDY: Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute left-[24px] top-[24px] cursor-pointer z-50 flex items-center hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p596d4e0} stroke="#F1EEE7" strokeWidth="2" transform="rotate(180 12 12)" />
        </svg>
      </button>

      {/* CASE STUDY: Hero Section */}
      <div className="w-full h-screen md:h-[600px] lg:h-[811px] relative">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/wp-content/2025/12/Authenticity-Hero16-9.webp"
        />

        {/* CASE STUDY: Title Card */}
        <div className="absolute left-0 bottom-0 md:bottom-auto md:top-[400px] lg:top-[645px] bg-[#f1eee7] rounded-tr-[10px] px-[20px] md:px-[30px] lg:px-[40px] py-[20px] md:py-[24px] max-w-full md:max-w-[90%] lg:max-w-none">
        <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
          {/* CASE STUDY: Main Title */}
          <h1 className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#222021] text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] lg:leading-[55px] tracking-[-1.5px] lg:tracking-[-2.56px] uppercase">
            Authenticity by Design
          </h1>

          {/* CASE STUDY: Subtitle */}
          <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#555] text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] tracking-[0.4px] max-w-full lg:max-w-[800px]">
            Violet Night had massive reach, but struggled with voice, which made conversions difficult
          </p>

          {/* CASE STUDY: Tags */}
          <div className="flex flex-wrap gap-[12px] md:gap-[16px]">
            {/* Social Media */}
            <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 48 48">
                <g stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                  <path d="M44 8H4v30h15l5 5l5-5h15z"/>
                  <circle cx="24" cy="19" r="5"/>
                  <path d="M33 32c0-4.418-4.03-8-9-8s-9 3.582-9 8"/>
                </g>
              </svg>
              <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Social Media</span>
            </div>

            {/* Research */}
            <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 48 48">
                <g stroke="#F1EEE7" strokeLinejoin="round" strokeWidth="4">
                  <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/>
                  <path d="M24 44c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14Z"/>
                  <path d="M24 44a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"/>
                </g>
              </svg>
              <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Research</span>
            </div>

            {/* Writing */}
            <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 48 48">
                <g stroke="#F1EEE7" strokeLinejoin="round" strokeWidth="4">
                  <rect width="36" height="20" x="6" y="6" rx="2"/>
                  <path strokeLinecap="round" d="M14 13h8m-8 6h20M8 44l4.889-6h21.778L40 44M24 26v18"/>
                </g>
              </svg>
              <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Writing</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <CaseStudyNav />

      {/* Content Container */}
      <div className="relative w-full px-[20px] md:px-[40px] lg:px-0">
        {/* CASE STUDY: Outcome Section */}
        <section id="outcome" className="pt-[180px] md:pt-[200px] lg:pt-[220px] pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px]">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
              Outcome
            </h2>

            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[24px] w-full">
              {/* Outcome Card 1 */}
              <div
                className="flex-1 rounded-[10px] px-[24px] md:px-[32px] lg:px-[40px] py-[16px] flex flex-col gap-[24px] min-h-[125px]"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 427.5 125\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(21.375 6.25 -21.375 15.366 213.75 62.5)\\'><stop stop-color=\\'rgba(85,85,85,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,114,95,1)\\' offset=\\'0.80769\\'/><stop stop-color=\\'rgba(176,146,106,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
              >
                <div className="flex flex-col gap-[24px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">
                    Target Interactions
                  </p>
                  <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-start md:items-end">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic text-[#f1eee7] text-[36px] md:text-[48px] leading-[1] tracking-[-0.96px] uppercase">
                      30%+
                    </p>
                    <div className="flex items-center gap-[4px]">
                      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1c8006f1} fill="#39FF14" />
                      </svg>
                      <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#39ff14] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px]">
                        Instagram, TikTok & Youtube
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-[#f1eee7] w-[70.5px]" />
              </div>

              {/* Outcome Card 2 */}
              <div
                className="flex-1 rounded-[10px] px-[24px] md:px-[32px] py-[16px] flex flex-col gap-[24px] min-h-[125px]"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 427.5 125\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(21.375 6.25 -21.375 15.366 213.75 62.5)\\'><stop stop-color=\\'rgba(85,85,85,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,114,95,1)\\' offset=\\'0.80769\\'/><stop stop-color=\\'rgba(176,146,106,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
              >
                <div className="flex flex-col gap-[24px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">
                    Tour-Level Numbers
                  </p>
                  <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-start md:items-end">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic text-[#39ff14] text-[36px] md:text-[48px] leading-[1] tracking-[-0.96px] uppercase">
                      MAINTAINED
                    </p>
                    <div className="flex items-center gap-[4px]">
                      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1c8006f1} fill="#39FF14" />
                      </svg>
                      <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#39ff14] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px]">
                        During Off-Season
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-[#f1eee7] w-[70.5px]" />
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY: Challenge Section */}
        <section id="challenge" className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px] md:gap-[40px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
                Challenge
              </h2>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] tracking-[0.64px]">
                Violet Night was pulling between two hundred thousand and a million views per video. The numbers were great, but it was not converting to real dollars. Views were not becoming fans. Without a consistent voice or point of view, their content was drawing attention without earning connection. In an era where Gen Z can sense a manufactured moment immediately, posting without something real to say is worse than not posting at all.
              </p>
            </div>

            <div className="flex flex-col gap-[24px]">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
                We targeted their goals to:
              </p>

              <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
                {/* Goal 1 */}
                <div className="flex-1 bg-[#e1c78f] rounded-[10px] px-[16px] py-[30px] md:py-[40px] flex flex-col gap-[16px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#333] text-[48px] md:text-[64px] leading-[55px] tracking-[-2.56px] uppercase">
                    *
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#2e3641] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                    Develop a clear point of view so Violet Night had something to say, not just something to post.
                  </p>
                </div>

                {/* Goal 2 */}
                <div className="flex-1 bg-[#e1c78f] rounded-[10px] px-[16px] py-[30px] md:py-[40px] flex flex-col gap-[16px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#333] text-[48px] md:text-[64px] leading-[55px] tracking-[-2.56px] uppercase">
                    *
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#2e3641] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                    Build a content funnel that moved fans from awareness through to genuine engagement.
                  </p>
                </div>

                {/* Goal 3 */}
                <div className="flex-1 bg-[#e1c78f] rounded-[10px] px-[16px] py-[30px] md:py-[40px] flex flex-col gap-[16px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#333] text-[48px] md:text-[64px] leading-[55px] tracking-[-2.56px] uppercase">
                    *
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#2e3641] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                    Design for authenticity in a way that resonated specifically with Gen Z women aged eighteen to twenty-six.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY: Method Section */}
        <section id="methods" className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px]">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
              Method
            </h2>

            <div className="flex flex-col gap-[30px] md:gap-[40px]">
              {/* Method Item 1 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Ran a month of strategy to develop Violet Night's worldview: ironic authenticity, intrinsic motivation, emotional self-destruction, a rejection of the status quo, and a sense of melodrama.
                </p>
              </div>

              {/* Method Item 2 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Built a three-tier content funnel (awareness, engagement, lead generation) to move fans through a structured journey from discovery to deep connection.
                </p>
              </div>

              {/* Method Item 3 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Shot 39 videos in two days to cover three months of content and a new single. Because of the volume, strategy was paramount in making these videos effective.
                </p>
              </div>

              {/* Method Item 4 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Created the Night Talks interview series for the engagement tier. These were honest, unscripted conversations with the lead singer that built trust and deepened fan connection.
                </p>
              </div>

              {/* Method Item 5 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Ran direct ads for the lead tier to convert engaged viewers into followers, streamers, and eventually ticket buyers.
                </p>
              </div>

              {/* Method Item 6 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Made a deliberate choice not to colour grade the videos. Violet Night's audience reads a colour grade as a filter, and filters are out of date and cheesy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY: Examples Section */}
        <section id="examples" className="pb-[80px] md:pb-[100px] lg:pb-[120px]">
          <div className="max-w-[770px] mx-auto lg:ml-[calc(25%+58px)] grid grid-cols-1 gap-[30px] md:gap-[40px]">
            {/* Example 1 */}
            <div className="flex flex-col gap-[16px] items-center">
              <a
                href="https://www.instagram.com/p/DXX7RdsD-oC/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity block"
              >
                <img
                  alt="Authenticity by Design"
                  className="w-full h-auto object-cover"
                  src="/wp-content/2025/12/Authenticity-Example.webp"
                />
              </a>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Authenticity by Design
              </p>
            </div>
          </div>
        </section>

        {/* CASE STUDY: CTA */}
        <div className="flex justify-center pb-[80px] md:pb-[100px]">
          <a href="/#contact-message" className="bg-[#f1eee7] border-[5px] border-[#8b9544] rounded-[5px] px-[16px] py-[8px] h-[54px] flex items-center gap-[12px] hover:bg-[#8b9544] hover:text-[#f1eee7] transition-colors group">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M6 17L11 12L6 7" stroke="#8B9544" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" className="group-hover:stroke-[#f1eee7]" />
              <path d="M13 17L18 12L13 7" stroke="#8B9544" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" className="group-hover:stroke-[#f1eee7]" />
            </svg>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#8b9544] text-[20px] leading-[normal] tracking-[0.4px] group-hover:text-[#f1eee7]">
              Let's Talk
            </span>
          </a>
        </div>

        {/* CASE STUDY: Pagination */}
        <div className="flex justify-between items-center max-w-[1268px] mx-auto pb-[60px] md:pb-[80px] px-[20px]">
          <button className="flex items-center gap-[8px] hover:opacity-70 transition-opacity">
            <svg className="size-[24px] rotate-180" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2e41d00} fill="#F1EEE7" />
            </svg>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#f1eee7] text-[20px] md:text-[24px] leading-[35px] tracking-[0.5px] underline decoration-solid">
              Previous
            </span>
          </button>

          <button className="flex items-center gap-[8px] hover:opacity-70 transition-opacity">
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#f1eee7] text-[20px] md:text-[24px] leading-[35px] tracking-[0.5px] underline decoration-solid">
              Next
            </span>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2e41d00} fill="#F1EEE7" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
