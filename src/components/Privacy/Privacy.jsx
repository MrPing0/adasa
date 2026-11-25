import { Link, useOutletContext } from "react-router-dom";

export default function Privacy() {
  const { siteInfo } = useOutletContext();
  const sections = [
    {
      title: "مقدمة",
      text: "مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.",
    },
    {
      title: "المعلومات التي نجمعها",
      items: [
        "بيانات الهوية: تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.",
        "بيانات الاتصال: تشمل عنوان البريد الإلكتروني.",
        "البيانات التقنية: تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.",
        "بيانات الاستخدام: تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.",
      ],
    },
    {
      title: "كيف نستخدم معلوماتك",
      items: [
        "لتقديم خدمتنا والحفاظ عليها",
        "لإخطارك بالتغييرات في خدمتنا",
        "لتقديم دعم العملاء",
        "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا",
        "لمراقبة استخدام خدمتنا",
        "لاكتشاف ومنع ومعالجة المشاكل التقنية",
      ],
    },
    {
      title: "ملفات تعريف الارتباط",
      text: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.",
    },
    {
      title: "أمان البيانات",
      text: "لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.",
    },
    {
      title: "حقوقك",
      items: [
        "طلب الوصول إلى بياناتك الشخصية",
        "طلب تصحيح بياناتك الشخصية",
        "طلب مسح بياناتك الشخصية",
        "الاعتراض على معالجة بياناتك الشخصية",
        "طلب تقييد معالجة بياناتك الشخصية",
        "الحق في سحب الموافقة",
      ],
    },
  ];
  return (
    <>
      <header className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <nav className="mb-8 flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-neutral-400 hover:text-white">
              الرئيسية
            </Link>
            <i className="fa-solid fa-chevron-left text-xs text-neutral-600"></i>
            <span className="font-medium text-orange-500">سياسة الخصوصية</span>
          </nav>

          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
            <i className="fa-solid fa-lock text-2xl text-orange-500"></i>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            سياسة الخصوصية
          </h1>
          <p className="text-lg text-neutral-400">آخر تحديث: 15 يناير 2026</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-12 flex gap-4 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6">
          <i className="fa-solid fa-shield-halved mt-1 text-xl text-orange-500"></i>
          <div>
            <h3 className="mb-1 font-semibold text-orange-500">
              خصوصيتك تهمنا
            </h3>
            <p className="text-sm text-orange-300/80">
              نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
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
                {section.text && (
                  <p className="leading-relaxed text-neutral-400">
                    {section.text}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-neutral-400"
                      >
                        <i className="fa-solid fa-circle-check mt-1 text-orange-500"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 text-sm">
                {sections.length + 1}
              </span>
              تواصل معنا
            </h2>
            <div className="pr-11">
              <p className="mb-4 leading-relaxed text-neutral-400">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
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
          باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
          <Link
            to="/terms"
            className="font-medium text-orange-500 hover:text-orange-400"
          >
            شروط الخدمة
          </Link>
          .
        </p>
      </div>
    </>
  );
}
