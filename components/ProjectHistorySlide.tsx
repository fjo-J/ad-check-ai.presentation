import { Award, Briefcase, TrendingUp } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function ProjectHistorySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

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
          <div className="w-16 h-0.5 mb-3" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-2xl mb-2 gradient-text">プロジェクト実績</h2>
          <p className="text-xs text-gray-600">幅広いAI領域で対応する技術力と実績（一部）</p>
        </div>

        {/* Content */}
        <div className="flex-1 flex gap-4">
          {/* Left - Table */}
          <div className="flex-1 border-2 border-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-gray-100">
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 px-3 text-gray-700 text-xs">ジャンル</th>
                  <th className="text-left py-2 px-3 text-gray-700 text-xs">顧客名</th>
                  <th className="text-left py-2 px-3 text-gray-700 text-xs">プロジェクト内容</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[
                  { genre: '画像処理', client: '株式会社H', project: 'マンション内AIセキュリティカメラ開発' },
                  { genre: '', client: '独立行政法人J', project: 'アフリカ向け密・クラスター検出AI開発' },
                  { genre: '自然言語', client: '株式会社L', project: '問い合わせ対応効率化AI開発' },
                  { genre: '', client: '株式会社S', project: 'ハラスメント検出AI開発' },
                  { genre: '予測', client: 'M株式会社', project: '薬材料の価格予測AI開発' },
                  { genre: '', client: '株式会社T', project: '印刷物の出荷数予測AI開発' },
                  { genre: '最適化', client: 'G株式会社', project: '発注計画最適化AI開発' },
                  { genre: '', client: '株式会社Z', project: '医療デバイスパラメータ最適化AI開発' },
                  { genre: '異常検知', client: '株式会社A', project: '健康異常予測・検知AI開発' },
                  { genre: '', client: 'H株式会社', project: 'ガントリークレーンの異常予測・検知AI開発' },
                  { genre: 'リコメンデーション', client: '株式会社N', project: '各ユーザの属性に合わせたリコメンデーションAI開発' },
                  { genre: '', client: '株式会社H', project: '食事運動メニューのリコメンデーションAI開発' },
                  { genre: '音声認識', client: '株式会社N', project: '自動応答システムのAI開発' },
                  { genre: '生成AI', client: 'A株式会社', project: 'ユーザ問い合わせ対応Chatbot開発' },
                  { genre: '', client: 'R株式会社', project: 'AI要求仕様分析システム開発' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="py-1.5 px-3">
                      {row.genre && (
                        <span className="inline-block border border-[#1e3a8a] text-[#1e3a8a] px-2 py-0.5 text-xs bg-blue-50 rounded">
                          {row.genre}
                        </span>
                      )}
                    </td>
                    <td className="py-1.5 px-3 text-gray-600">{row.client}</td>
                    <td className="py-1.5 px-3 text-gray-600 leading-relaxed">{row.project}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right - Stats */}
          <div className="w-48 space-y-3">
            <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center mx-auto mb-2 rounded-lg">
                  <Briefcase className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="text-4xl mb-1 gradient-text">100+</div>
                <p className="text-gray-900 mb-1 text-xs">プロジェクト実績</p>
                <p className="text-gray-500 text-xs">多様な業界での開発経験</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center mx-auto mb-2 rounded-lg">
                  <Award className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="text-4xl mb-1 gradient-text">8+</div>
                <p className="text-gray-900 mb-1 text-xs">AI技術領域</p>
                <p className="text-gray-500 text-xs">幅広い技術スタックに対応</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 bg-white p-5 rounded-lg shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center mx-auto mb-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="text-4xl mb-1 gradient-text">7+</div>
                <p className="text-gray-900 mb-1 text-xs">年の経験</p>
                <p className="text-gray-500 text-xs">2017年からの実績</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
