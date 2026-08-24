import { useSiteContent } from "./SiteContentProvider";

const SupportBanner = () => {
  const { content } = useSiteContent();

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${content.supportBanner.whatsappPhone}`;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div 
          className="rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 bg-cover bg-center"
          style={{ backgroundImage: `url(https://lambodragroup.com/wp-content/uploads/2025/12/centerctaback.png)` }}
        >
          {/* Left Graphic */}
          <div className="shrink-0">
            <img
              src="https://lambodragroup.com/wp-content/uploads/2025/12/womancallpic.png"
              alt="24/7 Customer Support"
              className="h-44 md:h-52 w-auto object-contain"
            />
          </div>

          {/* Center Text */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-semibold text-xs uppercase tracking-wider">
              <img src="https://lambodragroup.com/wp-content/uploads/2025/12/leftarrow.png" alt="" className="h-2.5 w-auto" />
              <span>{content.supportBanner.eyebrow}</span>
              <img src="https://lambodragroup.com/wp-content/uploads/2025/12/rightaroow.png" alt="" className="h-2.5 w-auto" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              24/7 Expert Hosting<br />
              Support Our<br />
              Customers Love
            </h2>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform"
            >
              <img
                src={content.supportBanner.buttonImage}
                alt="Let's Talk WhatsApp"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
