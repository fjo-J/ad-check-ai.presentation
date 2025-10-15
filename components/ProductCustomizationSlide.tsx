import { Settings, Zap, Target, Code, Sparkles, Link } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function ProductCustomizationSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>

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
          <h2 className="text-2xl mb-1 gradient-text">カスタマイズ対応</h2>
          <p className="text-xs text-gray-600">企業独自のニーズに柔軟に対応するカスタマイズ開発</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-3">
            {/* Hero Box */}
            <div className="border-2 border-[#1e3a8a] bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center rounded-lg">
                  <Sparkles className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-900 mb-1">AI開発企業ならではの強み</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    自社でAI開発を行っているため、他社では難しい高度なカスタマイズにも対応可能です。
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-[#1e3a8a] bg-blue-50 pl-3 py-2 rounded-r">
                <p className="text-[#1e3a8a] text-xs mb-1">企業独自ルール・レギュレーション対応</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  法令とセットにしたエンジンを<span className="text-[#1e3a8a]">無償開発</span>。標準搭載していない法令やガイドラインの追加も承ります。
                </p>
              </div>
            </div>

            {/* Customization Types */}
            <div className="border-2 border-gray-200 bg-white p-3 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                カスタマイズ対応例
              </h3>
              <div className="space-y-2">
                {[
                  {
                    icon: Settings,
                    title: '独自ルール実装',
                    desc: '企業固有の審査基準やレギュレーションをAIエンジンに組み込み'
                  },
                  {
                    icon: Target,
                    title: '精度カスタマイズ',
                    desc: '業界や商材に特化したチューニングで検出精度を最適化'
                  },
                  {
                    icon: Code,
                    title: 'システム連携',
                    desc: '既存の広告管理システムやCMSとAPI連携し、シームレスに統合'
                  },
                  {
                    icon: Link,
                    title: 'API連携開発',
                    desc: 'REST API、Webhook等を活用した外部システムとの双方向連携'
                  },
                  {
                    icon: Zap,
                    title: '新機能開発',
                    desc: '運用フロー対応、決裁機能など個別対応'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 border border-gray-200 bg-gray-50 rounded">
                    <div className="w-7 h-7 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded">
                      <item.icon className="w-3.5 h-3.5 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-xs mb-0.5">{item.title}</h4>
                      <p className="text-gray-600 text-xs leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {/* Process */}
            <div className="border-2 border-gray-200 bg-white p-3 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                カスタマイズの流れ
              </h3>
              <div className="space-y-1.5">
                {[
                  { step: '1', text: 'ヒアリング：ご要望や課題を詳細にお伺い' },
                  { step: '2', text: '提案：最適なカスタマイズ内容と見積もりを提示' },
                  { step: '3', text: '開発：AI開発チームが実装・検証を実施' },
                  { step: '4', text: 'テスト：お客様環境でテスト運用・調整' },
                  { step: '5', text: '本番運用：導入後も継続サポート' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-2 p-1.5 border border-gray-200 bg-gray-50 rounded">
                    <div className="w-5 h-5 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#1e3a8a] text-xs rounded">
                      {item.step}
                    </div>
                    <p className="text-gray-700 text-xs leading-tight">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="border-2 border-gray-200 bg-white p-3 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                カスタマイズのメリット
              </h3>
              <div className="space-y-1">
                {[
                  '自社ルールに完全準拠したチェック',
                  '業界特有のニーズに柔軟対応',
                  '既存システムとのスムーズな統合',
                  '精度の継続的な改善サポート'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#1e3a8a] rounded-full mt-1.5"></div>
                    <span className="text-xs text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* API Integration Examples */}
            <div className="border-2 border-[#1e3a8a] bg-blue-50 p-3 rounded-lg shadow-md">
              <h3 className="text-sm text-[#1e3a8a] mb-2 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#1e3a8a]"></div>
                API連携事例
              </h3>
              <div className="space-y-1.5">
                <div className="bg-white border border-gray-200 p-2 rounded">
                  <h4 className="text-gray-900 text-xs mb-0.5">CMSとの自動連携</h4>
                  <p className="text-gray-600 text-xs leading-tight">
                    コンテンツ公開前に自動チェック。承認フローに組み込み
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-2 rounded">
                  <h4 className="text-gray-900 text-xs mb-0.5">SNS投稿管理ツール連携</h4>
                  <p className="text-gray-600 text-xs leading-tight">
                    投稿前の自動審査と結果通知をAPI経由で実現
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-2 rounded">
                  <h4 className="text-gray-900 text-xs mb-0.5">社内承認システム統合</h4>
                  <p className="text-gray-600 text-xs leading-tight">
                    チェック結果を既存ワークフローに自動反映
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
