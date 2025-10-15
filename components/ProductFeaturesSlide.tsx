import { FileCheck, Zap, Shield } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function ProductFeaturesSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-20 w-80 h-80 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
        <div className="mb-6">
          <div className="w-16 h-0.5 mb-3" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-2xl mb-2 gradient-text">3つの大きな特徴</h2>
          <p className="text-sm text-gray-600">広告チェックAIの核となる機能</p>
        </div>

        {/* Features Grid */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          {/* Feature 1 */}
          <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <FileCheck className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base text-gray-900 mb-2">法令・ガイドライン準拠チェック</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  景品表示法、薬機法、健康増進法など、広告に関する各種法令とガイドラインに基づいて自動チェック。最新の法改正にも随時対応。
                </p>
              </div>
            </div>
            <div className="ml-16 mt-3 p-3 bg-blue-50 border-l-2 border-[#1e3a8a] rounded-r">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="text-[#1e3a8a]">強み：</span>法改正時も迅速に対応。専門家監修のもと、常にルールを最新化
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <Zap className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base text-gray-900 mb-2">リアルタイム検証</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  アップロードした広告素材を瞬時に分析。画像、テキスト、動画など多様なフォーマットに対応し、数秒で結果を表示。
                </p>
              </div>
            </div>
            <div className="ml-16 mt-3 p-3 bg-blue-50 border-l-2 border-[#1e3a8a] rounded-r">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="text-[#1e3a8a]">強み：</span>約10秒で分析完了。複数素材のチェックも可能
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <Shield className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base text-gray-900 mb-2">抵触率評価とレポート</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  検出された問題点を抵触率別（高・中・低）に分類。具体的な修正提案と共に詳細なレポートを生成。
                </p>
              </div>
            </div>
            <div className="ml-16 mt-3 p-3 bg-blue-50 border-l-2 border-[#1e3a8a] rounded-r">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="text-[#1e3a8a]">強み：</span>視覚的に分かりやすいダッシュボード。PDFエクスポート機能も搭載
              </p>
            </div>
          </div>

          {/* Feature 4 - チーム連携機能 */}
          <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <svg className="w-6 h-6 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base text-gray-900 mb-2">チーム連携機能</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  同じ画面で複数人で作業可能。承認フロー設定、コメント機能、担当者アサイン機能を搭載。
                </p>
              </div>
            </div>
            <div className="ml-16 mt-3 p-3 bg-blue-50 border-l-2 border-[#1e3a8a] rounded-r">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="text-[#1e3a8a]">強み：</span>リアルタイムでの共同作業が可能。チーム全体での効率的なワークフローを実現
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
