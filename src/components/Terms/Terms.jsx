import { Link, useOutletContext } from "react-router-dom";

export default function Terms() {
  const { siteInfo } = useOutletContext();
  const sections = [
    {
      title: "الموافقة على الشروط",
      text: "بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.",
    },
    {
      title: "رخصة الاستخدام",
      text: "يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.",
      listTitle: "بموجب هذا الترخيص لا يجوز لك:",
      items: [
        "تعديل أو نسخ المواد",
        "استخدام المواد لأي غرض تجاري أو للعرض العام",
        "محاولة فك أو عكس هندسة أي برنامج على الموقع",
        "إزالة أي حقوق نشر أو علامات ملكية من المواد",
        "نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر",
      ],
    },
    {
      title: "إخلاء المسؤولية",
      text: 'المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.',
    },
    {
      title: "القيود",
      text: "في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.",
    },
    {
      title: "محتوى المستخدم",
      text: "إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.",
      listTitle: "يجب ألا يكون محتواك:",
      items: [
        "أن يكون تشهيرياً أو فاحشاً أو مسيئاً",
        "انتهاك حقوق الملكية الفكرية للآخرين",
        "احتواء فيروسات أو أكواد ضارة",
        "انتهاك أي قوانين أو لوائح معمول بها",
        "الإعلان عن منتجات أو خدمات غير مصرح بها",
      ],
    },
    {
      title: "التعديلات",
      text: "قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.",
    },
  ];
  return (
    <>
      <header className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <nav className="mb-8 flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-neutral-400 hover:text-white">
              الرئيسية
            </Link>
            <i className="fa-solid fa-chevron-left text-xs text-neutral-600"></i>
            <span className="font-medium text-orange-500">شروط الخدمة</span>
          </nav>

          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
            <i className="fa-regular fa-file-lines text-2xl text-orange-500"></i>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">شروط الخدمة</h1>
          <p className="text-lg text-neutral-400">آخر تحديث: 15 يناير 2026</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-12 flex gap-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">
          <i className="fa-solid fa-triangle-exclamation mt-1 text-xl text-yellow-500"></i>
          <div>
            <h3 className="mb-1 font-semibold text-yellow-500">إشعار مهم</h3>
            <p className="text-sm text-yellow-300/80">
              يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو
              استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 text-sm">
                  {index + 1}
                </span>
                {section.title}
              </h2>

              <div className="pr-11">
                <p className="mb-4 leading-relaxed text-neutral-400">
                  {section.text}
                </p>

                {section.items && (
                  <>
                    <p className="mb-3 font-medium text-neutral-300">
                      {section.listTitle}
                    </p>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-neutral-400"
                        >
                          <i className="fa-solid fa-xmark mt-1 text-red-400"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 text-sm">
                {sections.length + 1}
              </span>
              معلومات الاتصال
            </h2>
            <div className="pr-11">
              <p className="mb-4 leading-relaxed text-neutral-400">
                إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
              </p>
              <a
                href={"mailto:" + siteInfo.email}
                className="font-medium text-orange-500 hover:text-orange-400"
              >
                <i className="fa-regular fa-envelope ml-2"></i>
                {siteInfo.email}
              </a>
            </div>
          </section>
        </div>

        <p className="mt-16 border-t border-[#262626] pt-8 text-center text-sm text-neutral-500">
          باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
          <Link
            to="/privacy"
            className="font-medium text-orange-500 hover:text-orange-400"
          >
            سياسة الخصوصية
          </Link>
        </p>
      </div>
    </>
  );
}
