import { TrendingDown, Shield, Video } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function CaseStudySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-20 w-72 h-72 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
          <h2 className="text-2xl mb-1 gradient-text">導入事例</h2>
          <p className="text-xs text-gray-600">様々な業界で広告チェックAIが業務効率化を実現</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-3">
          {/* Case Study 1 */}
          <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <TrendingDown className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-900">化粧品メーカーA社様</h3>
                  <span className="px-3 py-1 bg-blue-50 border border-[#1e3a8a] text-[#1e3a8a] text-xs rounded-full">
                    化粧品業界
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs text-gray-900 mb-1.5">課題</h4>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">薬機法チェックに専門知識が必要</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">社内独自ルールと法令の二重チェックが負担</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">審査に時間がかかり、広告展開が遅延</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-900 mb-1.5">導入内容</h4>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">薬機法＋自社独自ガイドライン実装</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">カスタムルールエンジンを無償開発</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">PDFレポート自動出力機能</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-50 border-l-4 border-[#1e3a8a] rounded-r">
                  <p className="text-[#1e3a8a] text-xs">
                    <span className="mr-2">成果：</span>
                    <span className="text-gray-900">審査工数70%削減</span>
                    <span className="text-gray-600 ml-2">｜ 広告展開スピード3倍向上</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <Shield className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-900">健康食品EC事業者B社様</h3>
                  <span className="px-3 py-1 bg-blue-50 border border-[#1e3a8a] text-[#1e3a8a] text-xs rounded-full">
                    EC・健康食品業界
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs text-gray-900 mb-1.5">課題</h4>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">商品数が多く、全ての広告文をチェックできない</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">景表法・健康増進法の抵触リスク</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">ECサイト更新時のリアルタイムチェックが必要</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-900 mb-1.5">導入内容</h4>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">CMS連携API開発</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">商品登録時の自動チェック機能</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">リアルタイム法令違反検出システム</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-50 border-l-4 border-[#1e3a8a] rounded-r">
                  <p className="text-[#1e3a8a] text-xs">
                    <span className="mr-2">成果：</span>
                    <span className="text-gray-900">法令違反ゼロを達成</span>
                    <span className="text-gray-600 ml-2">｜ 全商品を自動チェック可能に</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <Video className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-900">美容クリニックC社様</h3>
                  <span className="px-3 py-1 bg-blue-50 border border-[#1e3a8a] text-[#1e3a8a] text-xs rounded-full">
                    美容医療業界
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs text-gray-900 mb-1.5">課題</h4>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">医療広告ガイドライン対応が複雑</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">動画広告のチェックに手間がかかる</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">複数ガイドラインの同時チェックが困難</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-900 mb-1.5">導入内容</h4>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">医療広告GL＋美容医療GL＋自社規定</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">動画広告対応のカスタム開発</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                        <p className="text-xs text-gray-600 leading-tight">3軸同時チェック機能</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-50 border-l-4 border-[#1e3a8a] rounded-r">
                  <p className="text-[#1e3a8a] text-xs">
                    <span className="mr-2">成果：</span>
                    <span className="text-gray-900">動画審査も自動化</span>
                    <span className="text-gray-600 ml-2">｜ コンプライアンス体制強化</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
