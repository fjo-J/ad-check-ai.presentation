import { CheckCircle2, TrendingUp, Clock, Shield, Building2, Users, DollarSign, BarChart3 } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function ProductBenefitsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
        <div className="mb-3">
          <div className="w-16 h-0.5 mb-2" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-2xl mb-1 gradient-text">導入効果</h2>
          <p className="text-xs text-gray-600">広告チェックAI導入による具体的な成果</p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="border-2 border-gray-200 bg-white p-3 text-center rounded-lg shadow-md">
            <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center mx-auto mb-1.5 rounded-lg">
              <Clock className="w-5 h-5 text-[#1e3a8a]" />
            </div>
            <div className="text-4xl mb-1 gradient-text">80%</div>
            <p className="text-gray-900 text-xs mb-0.5">審査時間削減</p>
            <p className="text-gray-500 text-xs leading-tight">従来数時間→数分で完了</p>
          </div>

          <div className="border-2 border-gray-200 bg-white p-3 text-center rounded-lg shadow-md">
            <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center mx-auto mb-1.5 rounded-lg">
              <TrendingUp className="w-5 h-5 text-[#1e3a8a]" />
            </div>
            <div className="text-4xl mb-1 gradient-text">95%</div>
            <p className="text-gray-900 text-xs mb-0.5">検出精度</p>
            <p className="text-gray-500 text-xs leading-tight">高精度AIで確実にチェック</p>
          </div>

          <div className="border-2 border-gray-200 bg-white p-3 text-center rounded-lg shadow-md">
            <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center mx-auto mb-1.5 rounded-lg">
              <Shield className="w-5 h-5 text-[#1e3a8a]" />
            </div>
            <div className="text-4xl mb-1 gradient-text">100%</div>
            <p className="text-gray-900 text-xs mb-0.5">法令カバー率</p>
            <p className="text-gray-500 text-xs leading-tight">主要法令を網羅的にチェック</p>
          </div>
        </div>

        {/* Detailed Benefits */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="space-y-2">
            <h3 className="text-sm text-gray-900 mb-1.5 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#1e3a8a]"></div>
              業務効率の向上
            </h3>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <Clock className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">審査工数の大幅削減</h4>
                  <p className="text-xs text-gray-600 leading-tight">手動チェックに比べて80%以上の時間削減。数日かかっていた審査が数分で完了。</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <Users className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">担当者の負担軽減</h4>
                  <p className="text-xs text-gray-600 leading-tight">ルーチン作業から解放され、より創造的な業務に集中可能に。</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <TrendingUp className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">スピード向上</h4>
                  <p className="text-xs text-gray-600 leading-tight">広告リリースまでのリードタイムを大幅に短縮し、市場投入を加速。</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <BarChart3 className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">データ活用</h4>
                  <p className="text-xs text-gray-600 leading-tight">チェック履歴を分析し、頻出問題や傾向を可視化。改善に活用。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <h3 className="text-sm text-gray-900 mb-1.5 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#1e3a8a]"></div>
              リスク管理とコスト削減
            </h3>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <Shield className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">法令違反リスクの低減</h4>
                  <p className="text-xs text-gray-600 leading-tight">AIによる網羅的チェックで、見落としを防止。コンプライアンス強化。</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <DollarSign className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">コスト削減</h4>
                  <p className="text-xs text-gray-600 leading-tight">人件費削減、外部委託費削減により大幅なコスト効率化を実現。</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <CheckCircle2 className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">品質の均一化</h4>
                  <p className="text-xs text-gray-600 leading-tight">担当者のスキルに依存せず、常に一定水準のチェック品質を維持。</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-2 rounded-lg shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                  <Building2 className="w-4 h-4 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-900 mb-0.5">企業ブランドの保護</h4>
                  <p className="text-xs text-gray-600 leading-tight">法令違反による炎上や行政処分を未然に防ぎ、ブランド価値を守る。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
