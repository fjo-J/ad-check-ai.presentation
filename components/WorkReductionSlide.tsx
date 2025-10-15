import { Clock, TrendingDown, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function WorkReductionSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
          <h2 className="text-2xl mb-1 gradient-text">工数削減の実例</h2>
          <p className="text-xs text-gray-600">広告チェックAI導入���よる劇的な業務効率化</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Left - Before/After Comparison */}
          <div className="space-y-3">
            <h3 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#1e3a8a]"></div>
              導入前後の比較
            </h3>

            {/* Before */}
            <div className="border-2 border-red-300 bg-red-50 p-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="px-2 py-0.5 bg-red-500 text-white text-xs rounded">
                  導入前
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 border-2 border-red-500 bg-white flex items-center justify-center flex-shrink-0 mt-0.5 rounded">
                    <Clock className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-xs mb-0.5">1件あたり平均60分</h4>
                    <p className="text-gray-600 text-xs leading-tight">
                      専門担当者が法令・ガイドラインを確認しながら手動でチェック。複数の資料を参照し、判断に時間がかかる。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 border-2 border-red-500 bg-white flex items-center justify-center flex-shrink-0 mt-0.5 rounded">
                    <Users className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-xs mb-0.5">担当者のスキルに依存</h4>
                    <p className="text-gray-600 text-xs leading-tight">
                      経験や知識レベルによって判断がブレる。属人化により品質が不安定。
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 bg-white pl-2 py-1.5 rounded-r">
                  <p className="text-red-600 text-xs">
                    月間100件のチェックで<span className="text-sm">約100時間</span>の工数が必要
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="flex items-center gap-2 bg-[#1e3a8a] text-white px-4 py-2 rounded-full shadow-lg">
                <TrendingDown className="w-4 h-4" />
                <span className="text-xs">AI導入で劇的改善</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* After */}
            <div className="border-2 border-green-300 bg-green-50 p-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="px-2 py-0.5 bg-green-600 text-white text-xs rounded">
                  導入後
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 border-2 border-green-600 bg-white flex items-center justify-center flex-shrink-0 mt-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-xs mb-0.5">1件あたり平均3分</h4>
                    <p className="text-gray-600 text-xs leading-tight">
                      AIが自動で全法令をチェック。結果確認と最終判断のみ人が行う。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 border-2 border-green-600 bg-white flex items-center justify-center flex-shrink-0 mt-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-xs mb-0.5">一定品質を保証</h4>
                    <p className="text-gray-600 text-xs leading-tight">
                      AIによる均一なチェック基準で、担当者によるブレがゼロに。
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 bg-white pl-2 py-1.5 rounded-r">
                  <p className="text-green-700 text-xs">
                    月間100件のチェックが<span className="text-sm">約5時間</span>で完了
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - ROI Analysis */}
          <div className="space-y-3">
            <h3 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#1e3a8a]"></div>
              コスト削減効果（月間100件の場合）
            </h3>

            <div className="border-2 border-gray-200 bg-white p-3 rounded-lg shadow-md">
              <h4 className="text-sm text-gray-900 mb-2 pb-2 border-b-2 border-gray-200">人件費削減</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">導入前の人件費（時給3,000円×100時間）</span>
                  <span className="text-sm text-gray-900">300,000円</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">導入後の人件費（時給3,000円×5時間）</span>
                  <span className="text-sm text-gray-900">15,000円</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-2 border-[#1e3a8a]">
                  <span className="text-xs text-[#1e3a8a]">削減額</span>
                  <span className="text-lg text-[#1e3a8a]">285,000円/月</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-3 rounded-lg shadow-md">
              <h4 className="text-sm text-gray-900 mb-2 pb-2 border-b-2 border-gray-200">ROI分析</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">広告チェックAI 月額費用</span>
                  <span className="text-sm text-gray-900">50,000円</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">人件費削減額</span>
                  <span className="text-sm text-gray-900">285,000円</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-2 border-green-600">
                  <span className="text-xs text-green-700">純メリット</span>
                  <span className="text-lg text-green-700">+235,000円/月</span>
                </div>
                <div className="bg-green-50 border border-green-200 p-2 rounded mt-2">
                  <p className="text-xs text-green-700 text-center">年間<span className="text-base">約282万円</span>のコスト削減！</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-[#1e3a8a] bg-blue-50 p-3 rounded-lg shadow-lg">
              <h4 className="text-sm text-gray-900 mb-2">その他の付加価値</h4>
              <div className="space-y-1">
                {[
                  'スピード向上による売上機会損失の防止',
                  '法令違反リスクの低減による企業価値の保護',
                  '担当者の業務負担軽減と離職率の改善',
                  'データ蓄積による継続的な品質改善'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                    <span className="text-xs text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
