export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 md:px-24">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Hero / Karşılama Bölümü */}
        <section className="space-y-4 border-b border-slate-800 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Ceyda Ünal
              </h1>
              <p className="text-xl text-blue-400 font-medium">
                Software Engineer & Backend Developer
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                📍 Ankara, Turkey |  ceydun06@gmail.com | +90 551 111 91 61
              </p>
            </div>
            
            <div className="flex gap-3">
              <a 
                href="https://github.com/ceymida" 
                target="_blank" 
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/ceyda-ünal" 
                target="_blank" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed pt-2">
            Veritabanı mimarileri ve sunucu tarafı mantığına odaklanarak kariyerimi backend geliştirme üzerine yönlendiren bir yazılım mühendisiyim. Stajım süresince SQL, Java, ORM ve kurumsal yapılar üzerinde pratik deneyim kazandım; kendimi sürekli geliştirmeye odaklanıyorum.
          </p>
        </section>

        {/* Profesyonel Deneyim */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-slate-800 pb-2">
            Profesyonel Deneyim
          </h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h3 className="text-lg font-bold text-white">Backend Developer (Intern)</h3>
                <span className="text-sm text-blue-400 font-medium">Eyl 2025 - May 2026</span>
              </div>
              <p className="text-sm text-slate-400 font-medium">ILG Technologies | Çankaya, Ankara</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                ABD merkezli kurumsal bir proje kapsamında Apache Struts çatısını kullanarak MVC mimarisine uygun backend geliştirmeleri yaptım. Apache Cayenne (ORM) ile karmaşık veri modellerinin optimizasyonunu ve sistem entegrasyonlarını sağladım.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h3 className="text-lg font-bold text-white">Frontend Developer (Volunteer Intern)</h3>
                <span className="text-sm text-blue-400 font-medium">Mar 2024 - Haz 2024</span>
              </div>
              <p className="text-sm text-slate-400 font-medium">Medyagram | Meram, Konya</p>
               <p className="text-slate-300 text-sm leading-relaxed">
                Html, Css, JavaScript kullanarak statik websiteleri yaptım.
              </p>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-slate-800 pb-2">
            Projeler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <h3 className="text-lg font-bold text-white">HR Yönetim Paneli</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Çalışan verilerini ve idari işlemleri yönetmek için geliştirilmiş temel insan kaynakları yönetim paneli. Thymeleaf ile arayüz entegrasyonu, Hibernate ORM ile veritabanı yönetimi sağlandı.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Java</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Spring Boot</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Hibernate</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Thymeleaf</span>
              </div>
              <div className="pt-2">
                <a 
                  href="https://github.com/ceymida/ik-projesi-spring-boot" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  <span>GitHub'da İncele &rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3">
              <h3 className="text-lg font-bold text-white">Tarif Defteri Uygulaması</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kullanıcı kimlik doğrulama, tarif oluşturma ve kişiselleştirilmiş günlük menü önerileri sunan mobil uygulama. Güvenli kimlik doğrulama ve veri yönetimi için Firebase kullanıldı.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Flutter</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Firebase</span>
              </div>
            </div>
            <div className="pt-2">
                <a 
                  href="http://github.com/ceymida/Tarif-Defteri-Uygulamasi" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  <span>GitHub'da İncele &rarr;</span>
                </a>
              </div>
          </div>
        </section>

        {/* Teknik Yetkinlikler ve Eğitim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
              Teknik Yetkinlikler
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Hibernate", "C++", "Python", "SQL", "Flutter", "Firebase", "Docker", "Git", "PostgreSQL", "React", "Next.js"].map((skill) => (
                <span key={skill} className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
              Eğitim
            </h2>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-1">
              <h3 className="font-bold text-white text-sm">Bilgisayar Mühendisliği (GPA: 3.20/4.00)</h3>
              <p className="text-xs text-slate-400">Necmettin Erbakan Üniversitesi | 2022 - 2026</p>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}