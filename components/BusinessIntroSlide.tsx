import { Lightbulb, Megaphone, Cpu, TrendingUp, Users, Code, Zap } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function BusinessIntroSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-20 w-80 h-80 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
          <h2 className="text-2xl mb-2 gradient-text">事業紹介</h2>
          <p className="text-sm text-gray-600">幅広いAI領域での豊富な開発実���</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { icon: TrendingUp, value: '100+', label: 'プロジェクト実績' },
            { icon: Users, value: '30名', label: 'AI専門家' },
            { icon: Code, value: '8+', label: '技術領域' },
            { icon: Zap, value: '7年+', label: '開発経験' }
          ].map((stat, index) => (
            <div key={index} className="border-2 border-gray-200 bg-white p-3 text-center rounded-lg shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-[#1e3a8a]" />
                <p className="text-2xl gradient-text">{stat.value}</p>
              </div>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Three Columns */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          {/* AI Solution Business */}
          <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded-lg">
                <Lightbulb className="w-5 h-5 text-[#1e3a8a]" />
              </div>
              <h3 className="text-sm text-gray-900">AIソリューション事業</h3>
            </div>
            
            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
              クライアントのニーズに応じたオーダーメイドのAIシステム開発支援事業。AIビジネス領域におけるコンサルティングからリリース、保守・メンテナンスまで対応。
            </p>

            <div className="space-y-2 mb-3">
              {['画像処理・画像認識', '需要予測・最適化', '異常検知・リスク分析', '音声認識・自然言語処理'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 border border-gray-200 bg-gray-50 rounded">
                  <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                  <span className="text-gray-700 text-xs">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-[#1e3a8a] bg-blue-50 pl-3 py-2 rounded-r">
              <p className="text-xs text-gray-600">
                <span className="text-[#1e3a8a]">実績：</span>100社以上の企業へのAI導入支援
              </p>
            </div>
          </div>

          {/* Advertising AI Business */}
          <div className="border-3 border-[#1e3a8a] bg-white p-4 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent"></div>
            
            {/* Premium Badge */}
            <div className="absolute top-3 right-3 bg-[#1e3a8a] text-white px-2 py-1 text-xs rounded">
              <span>main</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded-lg">
                <Megaphone className="w-5 h-5 text-[#1e3a8a]" />
              </div>
              <h3 className="text-sm text-gray-900">広告AIソリューション事業</h3>
            </div>
            
            <p className="text-gray-700 text-xs mb-4 leading-relaxed">
              広告領域におけるAI活用促進を支援。広告物の適法性をチェックする<span className="text-[#1e3a8a]">「広告チェックAI」</span>や安全性が高い広告生成が可能な<span className="text-[#1e3a8a]">「広告生成AI(β版)」</span>を提供。
            </p>

            <div className="space-y-2 mb-3">
              <div className="border-2 border-[#1e3a8a] bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 border-2 border-[#1e3a8a] bg-white flex items-center justify-center text-xs text-[#1e3a8a] rounded">✓</div>
                  <p className="text-gray-900 text-sm">広告チェックAI</p>
                </div>
                <p className="text-gray-600 text-xs ml-8 mb-2">法令・ガイドライン・企業独自ルールに基づく自動チェック</p>
                <div className="flex gap-2 ml-8">
                  <span className="text-xs bg-white text-[#1e3a8a] px-2 py-0.5 border border-[#1e3a8a] rounded">利用企業400社+</span>
                  <span className="text-xs bg-white text-[#1e3a8a] px-2 py-0.5 border border-[#1e3a8a] rounded">特許出願中</span>
                </div>
              </div>

              <div className="border border-gray-200 bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 border border-gray-300 bg-white flex items-center justify-center text-xs text-gray-600 rounded">✨</div>
                  <p className="text-gray-900 text-sm">広告生成AI(β版)</p>
                </div>
                <p className="text-gray-600 text-xs ml-8">安全性の高い広告コンテンツ生成</p>
              </div>
            </div>
          </div>

          {/* AI Product Business */}
          <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded-lg">
                <Cpu className="w-5 h-5 text-[#1e3a8a]" />
              </div>
              <h3 className="text-sm text-gray-900">AIプロダクト事業</h3>
            </div>
            
            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
              AI領域におけるArchaicの特許技術を生かしてサービスを展開。メールやメッセージに対するハラスメントをチェックする<span className="text-gray-900">「ハラスメントチェックAI」</span>やどんな行動でも認識が可能なAIカメラを提供。
            </p>

            <div className="space-y-2 mb-3">
              {[
                { name: 'ハラスメントチェックAI', desc: 'テキストコミュニケーションの安全性確保' },
                { name: 'AIカメラ', desc: '高度な行動認識技術' },
                { name: 'Archaic Watch', desc: '消費者行動の認識分析' }
              ].map((product, index) => (
                <div key={index} className="border border-gray-200 bg-gray-50 p-2 rounded">
                  <p className="text-gray-900 text-xs mb-1">{product.name}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{product.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-[#1e3a8a] bg-blue-50 pl-3 py-2 rounded-r">
              <p className="text-xs text-gray-600">
                <span className="text-[#1e3a8a]">特許：</span>特許技術を活用した独自ソリューション
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
