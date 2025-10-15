import { Check } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function PricingSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-20 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

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
        <div className="mb-6">
          <div className="w-16 h-0.5 mb-3" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-3xl mb-2 gradient-text">料金表</h2>
          <p className="text-sm text-gray-600">シンプルで分かりやすい料金体系</p>
        </div>

        {/* Pricing Table */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="border-2 border-gray-200 overflow-hidden rounded-lg shadow-lg bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-200">
                    <th className="py-3 px-4 text-left text-gray-900 border-r border-gray-200 w-40"></th>
                    <th className="py-3 px-4 text-center text-gray-900 border-r border-gray-200">
                      <div className="text-lg mb-1">Starterプラン</div>
                    </th>
                    <th className="py-3 px-4 text-center text-gray-900 border-r border-gray-200">
                      <div className="text-lg mb-1">Standardプラン</div>
                    </th>
                    <th className="py-3 px-4 text-center text-gray-900 border-r border-gray-200">
                      <div className="text-lg mb-1">Enterpriseプラン</div>
                    </th>
                    <th className="py-3 px-4 text-center text-gray-900">
                      <div className="text-lg mb-1">PROプラン</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* 初期費用 */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-900 bg-gray-50 border-r border-gray-200">初期費用</td>
                    <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-200">
                      <span className="text-xl">0円</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-200">
                      <span className="text-xl">0円</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-200">
                      <div className="text-xl mb-1">0円</div>
                      <div className="text-xs text-gray-500">(カスタマイズ有償)</div>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      <span className="text-xl">0円</span>
                    </td>
                  </tr>

                  {/* 月額費用 */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-900 bg-gray-50 border-r border-gray-200">月額費用</td>
                    <td className="py-4 px-4 text-center border-r border-gray-200">
                      <span className="text-2xl gradient-text">35,000円</span>
                    </td>
                    <td className="py-4 px-4 text-center border-r border-gray-200">
                      <span className="text-2xl gradient-text">95,000円</span>
                    </td>
                    <td className="py-4 px-4 text-center border-r border-gray-200">
                      <span className="text-2xl gradient-text">240,000円</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="text-[#1e3a8a] text-sm mb-1">クライアント</div>
                      <div className="text-[#1e3a8a] text-sm">と調整</div>
                    </td>
                  </tr>

                  {/* 利用回数/月 */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-900 bg-gray-50 border-r border-gray-200">利用回数/月</td>
                    <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-200">
                      <span className="text-xl">20回</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-200">
                      <span className="text-xl">100回</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-200">
                      <span className="text-xl">500回</span>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      <div className="text-gray-700 text-sm mb-1">クライアント</div>
                      <div className="text-gray-700 text-sm">と調整</div>
                    </td>
                  </tr>

                  {/* ファイル削除 */}
                  <tr>
                    <td className="py-4 px-4 text-gray-900 bg-gray-50 border-r border-gray-200">ファイル削除</td>
                    <td className="py-4 px-4 text-center border-r border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-[#1e3a8a] rounded-full flex items-center justify-center bg-blue-50">
                          <Check className="w-4 h-4 text-[#1e3a8a]" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center border-r border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-[#1e3a8a] rounded-full flex items-center justify-center bg-blue-50">
                          <Check className="w-4 h-4 text-[#1e3a8a]" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center border-r border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-[#1e3a8a] rounded-full flex items-center justify-center bg-blue-50">
                          <Check className="w-4 h-4 text-[#1e3a8a]" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-[#1e3a8a] rounded-full flex items-center justify-center bg-blue-50">
                          <Check className="w-4 h-4 text-[#1e3a8a]" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Custom Engine Notice */}
            <div className="mt-4 border-2 border-[#1e3a8a] bg-blue-50 p-4 rounded-lg shadow-md">
              <p className="text-[#1e3a8a] text-sm mb-2">
                <span className="text-base">専用エンジンオプション</span>
              </p>
              <p className="text-gray-700 text-sm">
                専用エンジン（カスタムルール・企業独自ルール対応）を搭載する場合、全てのプランに<span className="text-[#1e3a8a]">月額 +20,000円</span>が適用されます。
              </p>
            </div>

            {/* Notes */}
            <div className="mt-4 space-y-1.5">
              <p className="text-gray-600 text-sm">※お支払い方法はPaid請求書にて銀行振込/コンビニ払いを選択頂きます。</p>
              <p className="text-gray-600 text-sm">※回数カウント方法：次のページ参照</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
