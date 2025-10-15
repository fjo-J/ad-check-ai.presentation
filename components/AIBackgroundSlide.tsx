import { Brain, TrendingUp, Image, MessageSquare, BarChart3, AlertTriangle } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function AIBackgroundSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

      {/* Grid pattern */}
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

      <div className="relative z-10 h-full flex flex-col px-16 py-10">
        {/* Header */}
        <div className="mb-5">
          <div className="w-16 h-0.5 mb-3" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-2xl mb-2 gradient-text">
            AIがビジネスを変える時代
          </h2>
          <p className="text-sm text-gray-600">
            様々な業務でAIが活用され、効率化と品質向上を実現
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Left - Statistics */}
          <div className="space-y-4">
            <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded-lg">
                  <TrendingUp className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div>
                  <p className="text-4xl mb-1 font-light gradient-text">80%</p>
                  <p className="text-gray-900 text-sm mb-1">業務時間削減</p>
                  <p className="text-xs text-gray-600 leading-relaxed">AIによる自動化で大幅な効率化を実現</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded-lg">
                  <Brain className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div>
                  <p className="text-4xl mb-1 font-light gradient-text">95%</p>
                  <p className="text-gray-900 text-sm mb-1">精度向上</p>
                  <p className="text-xs text-gray-600 leading-relaxed">人的ミスを削減し、一貫した品質を維持</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Use Cases */}
          <div className="space-y-3">
            <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-3">
              <div className="w-1 h-5 bg-[#1e3a8a]"></div>
              AIの活用領域
            </h3>
            
            <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 border border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded">
                  <Image className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <h4 className="text-gray-900 text-sm">画像・動画認識</h4>
              </div>
              <p className="text-xs text-gray-600 ml-11 leading-relaxed">コンテンツの自動分類、物体検出、不適切コンテンツの検出</p>
            </div>

            <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 border border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded">
                  <MessageSquare className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <h4 className="text-gray-900 text-sm">自然言語処理</h4>
              </div>
              <p className="text-xs text-gray-600 ml-11 leading-relaxed">文章の自動生成、感情分析、コンプライアンスチェック</p>
            </div>

            <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 border border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded">
                  <BarChart3 className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <h4 className="text-gray-900 text-sm">予測・最適化</h4>
              </div>
              <p className="text-xs text-gray-600 ml-11 leading-relaxed">需要予測、リスク評価、パーソナライゼーション</p>
            </div>

            <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 border border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded">
                  <AlertTriangle className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <h4 className="text-gray-900 text-sm">異常検知</h4>
              </div>
              <p className="text-xs text-gray-600 ml-11 leading-relaxed">セキュリティ、品質管理、不正検出</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-5 border-l-4 border-[#1e3a8a] bg-blue-50 pl-4 py-2 rounded-r">
          <p className="text-gray-700 text-xs">
            <span className="text-[#1e3a8a]">広告チェックAI</span>は、これらの最新AI技術を広告業界に特化して応用したソリューションです
          </p>
        </div>
      </div>
    </div>
  );
}
