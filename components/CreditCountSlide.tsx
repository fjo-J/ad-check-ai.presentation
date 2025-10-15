import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function CreditCountSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
        <div className="mb-2">
          <div className="w-16 h-0.5 mb-2" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-2xl mb-1 gradient-text">クレジットカウント</h2>
          <p className="text-xs text-gray-600">チェック回数のカウント方法</p>
        </div>

        {/* Credit Count Table */}
        <div className="flex-1">
          <div className="w-full">
            <div className="border-2 border-gray-200 overflow-hidden rounded-lg shadow-md bg-white">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 w-24" rowSpan={2}>
                      チェック対象
                    </th>
                    <th className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 w-28" rowSpan={2}>
                      文字数/画像点数
                    </th>
                    <th className="py-1.5 px-2 text-center text-gray-900" colSpan={3}>
                      チェック回数
                    </th>
                  </tr>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="py-1.5 px-1.5 text-center text-gray-900 border-r border-gray-200 border-t border-gray-200">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xs leading-tight">薬機法 or 景表法</span>
                        <div className="flex gap-0.5">
                          <span className="px-1 py-0.5 bg-[#1e3a8a] text-white text-xs leading-none rounded">薬機</span>
                          <span className="px-1 py-0.5 bg-gray-300 text-gray-700 text-xs leading-none rounded">景表</span>
                        </div>
                      </div>
                    </th>
                    <th className="py-1.5 px-1.5 text-center text-gray-900 border-r border-gray-200 border-t border-gray-200">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xs leading-tight">薬機法 and 景表法</span>
                        <div className="flex gap-0.5">
                          <span className="px-1 py-0.5 bg-[#1e3a8a] text-white text-xs leading-none rounded">薬機</span>
                          <span className="px-1 py-0.5 bg-[#1e3a8a] text-white text-xs leading-none rounded">景表</span>
                        </div>
                      </div>
                    </th>
                    <th className="py-1.5 px-1.5 text-center text-gray-900 border-t border-gray-200">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xs leading-tight">画像判定</span>
                        <div className="flex gap-0.5">
                          <span className="px-1 py-0.5 bg-[#1e3a8a] text-white text-xs leading-none rounded">画像</span>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-xs">
                  {/* テキスト */}
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-gray-900 bg-gray-50 border-r border-gray-200 text-center" rowSpan={4}>
                      テキスト
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      0〜2,500
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">1</td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">2</td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      2,501〜5,000
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">2</td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">4</td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      5,001〜7,500
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">3</td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">6</td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      7,501〜10,000
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">4</td>
                    <td className="py-1.5 px-2 text-center text-gray-900 border-r border-gray-200 bg-blue-50">8</td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100"></td>
                  </tr>

                  {/* 画像 */}
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-gray-900 bg-gray-50 border-r border-gray-200 text-center" rowSpan={4}>
                      画像
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      0〜10
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-900 bg-blue-50">1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      11〜20
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-900 bg-blue-50">2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      21〜30
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-900 bg-blue-50">3</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1.5 px-2 text-center text-gray-700 border-r border-gray-200">
                      31〜40
                    </td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-400 bg-gray-100 border-r border-gray-200"></td>
                    <td className="py-1.5 px-2 text-center text-gray-900 bg-blue-50">4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Examples */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="border-2 border-gray-200 bg-white p-3 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                  具体例 1：テキストチェック
                </h3>
                <div className="bg-blue-50 border border-gray-200 p-2 rounded mb-2">
                  <p className="text-xs text-gray-700 mb-1">2,000文字のLPテキストを薬機法のみでチェック</p>
                  <p className="text-xs text-[#1e3a8a]">→ 文字数: 0〜2,500 / 薬機法のみ = <span className="text-base">1回</span></p>
                </div>
                <div className="bg-blue-50 border border-gray-200 p-2 rounded">
                  <p className="text-xs text-gray-700 mb-1">4,000文字のLPテキストを薬機法＋景表法でチェック</p>
                  <p className="text-xs text-[#1e3a8a]">→ 文字数: 2,501〜5,000 / 両方 = <span className="text-base">4回</span></p>
                </div>
              </div>

              <div className="border-2 border-gray-200 bg-white p-3 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                  具体例 2：画像チェック
                </h3>
                <div className="bg-blue-50 border border-gray-200 p-2 rounded mb-2">
                  <p className="text-xs text-gray-700 mb-1">5枚の商品画像を画像判定でチェック</p>
                  <p className="text-xs text-[#1e3a8a]">→ 画像数: 0〜10 / 画像判定 = <span className="text-base">1回</span></p>
                </div>
                <div className="bg-blue-50 border border-gray-200 p-2 rounded">
                  <p className="text-xs text-gray-700 mb-1">15枚のバナー画像を画像判定でチェック</p>
                  <p className="text-xs text-[#1e3a8a]">→ 画像数: 11〜20 / 画像判定 = <span className="text-base">2回</span></p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-3 border-l-4 border-[#1e3a8a] bg-blue-50 pl-3 py-2 rounded-r">
              <p className="text-xs text-gray-700">
                ※ 10,000文字、40枚を超える場合は、別途お問い合わせください。<br />
                ※ 複数の法令を同時にチェックすると、それぞれの法令分のクレジットが消費されます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
