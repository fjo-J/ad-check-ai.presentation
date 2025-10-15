import { Check, X, Sparkles } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function CompetitorComparisonSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-40 w-64 h-64 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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

      <div className="relative z-10 h-full flex flex-col px-16 py-10">
        {/* Header */}
        <div className="mb-4">
          <div className="w-16 h-0.5 mb-3" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="text-2xl gradient-text">広告チェックAI</h2>
            <span className="text-base text-gray-600">他社比較【概要】</span>
          </div>
          <p className="text-xs text-gray-500">主要競合サービスとの詳細比較</p>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 border-2 border-gray-200 overflow-hidden bg-white rounded-lg shadow-lg">
          <table className="w-full h-full text-xs">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-200">
                <th className="text-left py-2 px-3 border-r border-gray-200 w-28 text-gray-700"></th>
                <th className="py-2 px-3 border-r border-gray-200 relative bg-blue-50">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent"></div>
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1e3a8a]" />
                    <span className="text-base text-gray-900">広告チェックAI</span>
                  </div>
                </th>
                <th className="py-2 px-3 border-r border-gray-200 text-gray-700">トラスクエタブド</th>
                <th className="py-2 px-3 text-gray-700">リスクミル</th>
              </tr>
            </thead>
            <tbody>
              {/* 価格 */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-3 bg-gray-50 border-r border-gray-200 text-gray-900">価格</td>
                <td className="py-3 px-3 border-r border-gray-200 bg-blue-50 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e3a8a]"></div>
                  <div className="space-y-0.5">
                    <p className="text-gray-700"><span className="text-green-600">初期費用：無料</span></p>
                    <p className="text-gray-700">月額費用：<span className="text-[#1e3a8a]">35,000円〜</span></p>
                  </div>
                </td>
                <td className="py-3 px-3 border-r border-gray-200 text-gray-600">
                  <div className="space-y-0.5">
                    <p>初期費用：20万円</p>
                    <p>月額費用：90,000円〜</p>
                  </div>
                </td>
                <td className="py-3 px-3 text-gray-600">
                  <div className="space-y-0.5">
                    <p>初期費用：無料</p>
                    <p>月額費用：84,000円〜</p>
                  </div>
                </td>
              </tr>

              {/* カスタマイズ */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-3 bg-gray-50 border-r border-gray-200 text-gray-900">カスタマイズ</td>
                <td className="py-3 px-3 border-r border-gray-200 bg-blue-50 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e3a8a]"></div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-green-600 bg-green-50 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">無償開発対応</p>
                </td>
                <td className="py-3 px-3 border-r border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-red-500 bg-red-50 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">対応不可</p>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-red-500 bg-red-50 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">対応不可</p>
                </td>
              </tr>

              {/* チェック内容 */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-3 bg-gray-50 border-r border-gray-200 text-gray-900">チェック内容</td>
                <td className="py-3 px-3 border-r border-gray-200 bg-blue-50 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e3a8a]"></div>
                  <div className="space-y-0.5 text-gray-700 text-xs leading-relaxed">
                    <p><span className="text-[#1e3a8a]">✓</span> 文脈を理解した文章判定</p>
                    <p><span className="text-[#1e3a8a]">✓</span> 国内唯一の画像判定AI</p>
                    <p><span className="text-[#1e3a8a]">✓</span> カスタムルール対応</p>
                  </div>
                </td>
                <td className="py-3 px-3 border-r border-gray-200 text-gray-600 text-xs">
                  <p>キーワードマッチングのみ</p>
                </td>
                <td className="py-3 px-3 text-gray-600 text-xs">
                  <p>キーワードマッチング＋OCR</p>
                </td>
              </tr>

              {/* 対応法令 */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-3 bg-gray-50 border-r border-gray-200 text-gray-900">対応法令</td>
                <td className="py-3 px-3 border-r border-gray-200 bg-blue-50 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e3a8a]"></div>
                  <p className="text-gray-700 text-xs">薬機法、景表法、健康増進法等<br />＋企業独自ルール追加可能</p>
                </td>
                <td className="py-3 px-3 border-r border-gray-200 text-gray-600 text-xs">
                  <p>薬機法、景表法のみ</p>
                </td>
                <td className="py-3 px-3 text-gray-600 text-xs">
                  <p>薬機法、景表法、健康増進法</p>
                </td>
              </tr>

              {/* サポート */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-3 bg-gray-50 border-r border-gray-200 text-gray-900">サポート</td>
                <td className="py-3 px-3 border-r border-gray-200 bg-blue-50 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e3a8a]"></div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-green-600 bg-green-50 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">AI開発企業による専門サポート</p>
                </td>
                <td className="py-3 px-3 border-r border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-yellow-500 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 text-xs">
                      △
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">メールサポートのみ</p>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-yellow-500 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 text-xs">
                      △
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">チャットサポート</p>
                </td>
              </tr>

              {/* 精度改善 */}
              <tr>
                <td className="py-3 px-3 bg-gray-50 border-r border-gray-200 text-gray-900">精度改善</td>
                <td className="py-3 px-3 border-r border-gray-200 bg-blue-50 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e3a8a]"></div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-green-600 bg-green-50 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">継続的な改善対応</p>
                </td>
                <td className="py-3 px-3 border-r border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-red-500 bg-red-50 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">個別対応なし</p>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-red-500 bg-red-50 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-1">個別対応なし</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-3 border-l-4 border-[#1e3a8a] bg-blue-50 pl-3 py-2 rounded-r">
          <p className="text-xs text-gray-600">
            ※ 競合製品情報は公開情報を基に作成（2025年時点）<br />
            ※ 詳細な比較や最新情報はお問い合わせください
          </p>
        </div>
      </div>
    </div>
  );
}
