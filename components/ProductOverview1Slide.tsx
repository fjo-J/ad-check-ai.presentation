import { Sparkles, CheckSquare, Image as ImageIcon, Laptop } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function ProductOverview1Slide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

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
          <div className="w-16 h-0.5 mb-2" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="text-2xl gradient-text">広告チェックAI</h2>
            <span className="text-base text-gray-600">サービス概要</span>
          </div>
          <p className="text-xs text-gray-500">AIが広告の適法性を自動チェックし、安全で効率的な広告制作を実現</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-3">
            <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded-lg">
                  <Sparkles className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="text-base text-gray-900 mb-1">広告チェックAIとは</h3>
                  <p className="text-gray-500 text-xs">AI-Powered Compliance Check System</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mb-2">
                最新のディープラーニング技術を活用し、広告素材の適法性を自動的にチェックするAIシステムです。景品表示法、薬機法、健康増進法などの各種法令やガイドラインに基づいて、広告内容をリアルタイムで分析・評価します。
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                従来は専門知識を持つ担当者が手作業で確認していた広告審査を、AIが高速かつ高精度で実行。人的ミスを削減し、一貫した品質でのチェックを実現します。
              </p>
            </div>

            {/* What it solves */}
            <div className="border-2 border-gray-200 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                解決する課題
              </h3>
              <div className="space-y-2">
                {[
                  { title: '法令違反リスク', desc: '知識不足や見落としによる法令違反を防止' },
                  { title: '審査工数の増大', desc: '手動チェックに時間がかかり、業務が圧迫' },
                  { title: '品質のばらつき', desc: '担当者のスキルによって判断が異なる' },
                  { title: '法改正への対応', desc: '最新の法令・ガイドラインへの追従が困難' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 border border-gray-200 bg-red-50 rounded">
                    <div className="w-5 h-5 border-2 border-red-500 bg-white flex items-center justify-center flex-shrink-0 text-red-500 text-xs mt-0.5 rounded">!</div>
                    <div>
                      <h4 className="text-gray-900 text-xs mb-0.5">{item.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {/* Key Features */}
            <div className="border-2 border-[#1e3a8a] bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                3つの主要機能
              </h3>
              <div className="space-y-2">
                <div className="border-2 border-[#1e3a8a] bg-blue-50 p-3 rounded-lg">
                  <div className="w-full h-0.5 bg-gradient-to-r from-[#1e3a8a] to-transparent mb-2"></div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 border-2 border-[#1e3a8a] bg-white flex items-center justify-center flex-shrink-0 rounded">
                      <CheckSquare className="w-4 h-4 text-[#1e3a8a]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-gray-900 mb-1">広告文章AIチェック</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-1">
                        文章全体の前後の文脈や意図を把握し、AIが総合的に判定。単なるキーワードマッチングではなく、文章の意味を理解した上で法令違反の可能性を検出します。
                      </p>
                      <div className="bg-white border-l-2 border-[#1e3a8a] pl-2 py-1 rounded-r">
                        <p className="text-xs text-gray-500">※他社はキーワードチェックのみ</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-[#1e3a8a] bg-blue-50 p-3 rounded-lg">
                  <div className="w-full h-0.5 bg-gradient-to-r from-[#1e3a8a] to-transparent mb-2"></div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 border-2 border-[#1e3a8a] bg-white flex items-center justify-center flex-shrink-0 rounded">
                      <ImageIcon className="w-4 h-4 text-[#1e3a8a]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-gray-900 mb-1">国内唯一の画像判定AI</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-1">
                        白衣画像や医療関連画像など、視覚的な要素の適法性も判定可能。画像内のテキストをOCRで読み取るだけでなく、画像そのものの内容を分析します。
                      </p>
                      <div className="bg-white border-l-2 border-[#1e3a8a] pl-2 py-1 rounded-r">
                        <p className="text-xs text-[#1e3a8a]">※特許出願中</p>
                        <p className="text-xs text-gray-500 mt-0.5">※他社はOCRのみ</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-[#1e3a8a] bg-blue-50 p-3 rounded-lg">
                  <div className="w-full h-0.5 bg-gradient-to-r from-[#1e3a8a] to-transparent mb-2"></div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 border-2 border-[#1e3a8a] bg-white flex items-center justify-center flex-shrink-0 rounded">
                      <Laptop className="w-4 h-4 text-[#1e3a8a]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-gray-900 mb-1">カスタマイズ開発</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-1">
                        企業独自のルールや業界特有の規制にも対応可能。精度改善、動画チェック、音声チェックなど、幅広いニーズに柔軟に対応します。
                      </p>
                      <div className="bg-white border-l-2 border-[#1e3a8a] pl-2 py-1 rounded-r">
                        <p className="text-xs text-gray-500">※AI開発企業だからできる柔軟な対応</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
