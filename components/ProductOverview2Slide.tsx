import { ArrowDown, FileCheck } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';
import checkResultImage from 'figma:asset/b0dae1fdcbf53e8843c623dd9c98c8290af532f1.png';

export function ProductOverview2Slide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="text-2xl gradient-text">広告チェックAI</h2>
            <span className="text-sm text-gray-600">チェックフロー</span>
          </div>
          <p className="text-xs text-gray-500">シンプルな4ステップで広告審査を完了</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Left Column - Flow */}
          <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#1e3a8a]"></div>
              チェックフロー
            </h3>
            <div className="space-y-2">
              {[
                { 
                  step: '1', 
                  title: '広告素材アップロード', 
                  desc: '画像、テキスト、PDF、動画等をドラッグ&ドロップで簡単にアップロード。',
                  details: ['JPG, PNG, PDF, Word等', '動画対応', '最大50ファイル']
                },
                { 
                  step: '2', 
                  title: 'AI自動分析', 
                  desc: '複数の法令・ガイドラインで多角的チェック。約10秒で分析完了。',
                  details: ['指定法令およびガイドライン', 'カスタムルール適用', '文脈理解AIで判定']
                },
                { 
                  step: '3', 
                  title: '結果レポート生成', 
                  desc: '抵触率を分類し、修正案を提示。わかりやすいレポートで表示。',
                  details: ['抵触率バー表示', '該当箇所ハイライト', '修正案と法令併記']
                },
                { 
                  step: '4', 
                  title: '修正・再チェック', 
                  desc: '修正後の素材を即座に再チェック。修正履歴も自動記録。',
                  details: ['修正前後の比較', 'バージョン管理', '承認フロー連携']
                }
              ].map((item, index) => (
                <div key={item.step}>
                  <div className="flex items-start gap-2 p-2 border border-gray-200 bg-gray-50 rounded">
                    <div className="w-6 h-6 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#1e3a8a] text-xs rounded">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 text-xs mb-0.5">{item.title}</h4>
                      <p className="text-gray-600 text-xs leading-tight mb-1">{item.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.details.map((detail, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-gray-600 px-2 py-0.5 border border-gray-200 rounded">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="flex justify-center my-1">
                      <ArrowDown className="w-4 h-4 text-[#1e3a8a]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Example with Image */}
          <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#1e3a8a]"></div>
              チェック結果イメージ
            </h3>
            
            <div className="space-y-3">
              {/* Check Result Image */}
              <div className="border-2 border-gray-200 bg-white p-2 rounded-lg">
                <img 
                  src={checkResultImage} 
                  alt="チェック結果画面" 
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Risk Levels with Progress Bars */}
              <div className="border-2 border-gray-200 bg-gray-50 p-3 rounded-lg">
                <h4 className="text-xs text-gray-900 mb-2">抵触率分類</h4>
                <p className="text-xs text-gray-600 mb-3">※100%に近いほど抵触している</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">80-100%：高抵触</span>
                      <span className="text-xs text-red-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">50-79%：中抵触</span>
                      <span className="text-xs text-yellow-600">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">20-49%：低抵触</span>
                      <span className="text-xs text-blue-600">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">0-19%：問題なし</span>
                      <span className="text-xs text-green-600">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Features */}
              <div className="border-2 border-gray-200 bg-gray-50 p-3 rounded-lg">
                <h4 className="text-xs text-gray-900 mb-2">便利な機能</h4>
                <div className="space-y-1">
                  {[
                    'PDF、Excel形式でレポートをダウンロード',
                    'チェック履歴の自動保存',
                    'チーム内での結果共有機能',
                    '承認ワークフローとの連携',
                    'コメント機能で意見交換',
                    '社内URL共有で簡単アクセス'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
