import { Building2, Calendar, User, Users, Phone, MapPin, Globe } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function CompanyOverviewSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Logo */}
      <div className="absolute top-8 right-8">
        <img src={archaicLogo} alt="archaic" className="h-8" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-16 py-9">
        {/* Header */}
        <div className="mb-4">
          <div className="w-16 h-0.5 mb-3" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-2xl gradient-text">会社概要</h2>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 gap-5">
          {/* Left Column - Company Info */}
          <div className="space-y-3">
            <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-[#1e3a8a]" />
                    <p className="text-gray-500 text-xs">社名</p>
                  </div>
                  <p className="text-gray-900 text-sm">株式会社Archaic</p>
                  <p className="text-gray-500 text-xs mt-0.5">(英文名 Archaic Inc.)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#1e3a8a]" />
                    <p className="text-gray-500 text-xs">設立</p>
                  </div>
                  <p className="text-gray-900 text-sm">2017年11月</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-[#1e3a8a]" />
                    <p className="text-gray-500 text-xs">代表取締役</p>
                  </div>
                  <p className="text-gray-900 text-sm">横山淳</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-gray-500 mb-2 text-xs">資本金</p>
                  <p className="text-gray-900 text-sm">3000万円</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-[#1e3a8a]" />
                    <p className="text-gray-500 text-xs">従業員数</p>
                  </div>
                  <p className="text-gray-900 text-sm">30名</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-[#1e3a8a]" />
                    <p className="text-gray-500 text-xs">電話番号</p>
                  </div>
                  <p className="text-gray-900 text-sm">03-5860-6788</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#1e3a8a]" />
                <p className="text-gray-500 text-xs">所在地</p>
              </div>
              <p className="text-gray-900 text-sm">東京都渋谷区神宮前1-22-1 オークラビル5F</p>
            </div>

            <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-500 mb-2 text-xs">事業内容</p>
              <p className="text-gray-900 text-sm leading-relaxed">ディープラーニングや人工知能システムの受託開発、受託研究開発</p>
            </div>

            <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-[#1e3a8a]" />
                <p className="text-gray-500 text-xs">URL</p>
              </div>
              <p className="text-[#1e3a8a] text-sm">http://archaic.co.jp</p>
            </div>
          </div>

          {/* Right Column - History */}
          <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-1 h-5 bg-[#1e3a8a]"></div>
              沿革
            </h3>
            <div className="space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(100% - 2rem)' }}>
              {[
                { date: '2017年11月', event: '設立、AIソリューション事業開始' },
                { date: '2018年 2月', event: 'NVIDIAより『NVIDIA Inception Program』パートナー認定' },
                { date: '2018年 4月', event: '日本政策金融公庫「新規開業資金事業」より資金調達実施' },
                { date: '2018年11月', event: '事業拡大に伴い、AI技術転' },
                { date: '2019年 4月', event: '日本政策金融公庫より資金調達実施' },
                { date: '2019年10月', event: '技術者化支援を行うAI技術者向け管理技術を開発' },
                { date: '2020年 2月', event: '日本政策金融公庫より資金調達実施' },
                { date: '2021年 6月', event: '宗像/社益金の資本投入により資金を3000万円に増資' },
                { date: '2022年11月', event: '「広告チェックAI」リリース' },
                { date: '2024年 1月', event: '「広告チェックAI」利用登録企業100社突破' },
                { date: '2024年 8月', event: '株式会社SUPER STUDIOと業務提携' },
                { date: '2024年12月', event: '大日本印刷株式会社様へのAI審査サービスを支援' }
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-20 text-gray-500 text-xs pt-0.5">{item.date}</div>
                  <div className="flex-1">
                    <div className="relative pl-3 pb-2 border-l-2 border-gray-200">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[#1e3a8a] rounded-full" />
                      <p className="text-gray-700 text-xs leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
