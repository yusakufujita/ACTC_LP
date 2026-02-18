export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center text-white bg-[url('/actc_background.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Androidクローズドテストコミュニティ
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8">
            Androidアプリのクローズドテストを相互支援する開発者コミュニティ。
            リリース前のテスト人数を効率よく集められます。
          </p>
          <a
            href="https://page.theapps.jp/paid/join/H8hv3G40M25l59f1"
            className="apps-af bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            今すぐ参加する
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-28 bg-gradient-to-br from-emerald-200 via-emerald-100 to-green-100 text-emerald-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold tracking-widest bg-emerald-300/60 text-emerald-900 rounded-full backdrop-blur-md">
            ABOUT ACTC
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            ACTCとは？
          </h2>

          <div className="bg-white/70 backdrop-blur-lg border border-emerald-300 rounded-2xl p-10 md:p-14 shadow-xl">
            <p className="text-lg md:text-xl leading-8 text-emerald-900">
              Androidクローズドテストコミュニティ（ACTC）は、
              Google Playのクローズドテスト要件を満たすために、
              開発者同士が相互にテスト協力を行う場です。
              <br className="hidden md:block" />
              効率的かつ持続可能なテスト環境を構築することを目的としています。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-28 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
            ACTCの特徴
          </h2>
          <p className="mt-4 text-emerald-700">
            開発者のために設計された、効率的で持続可能なテスト支援環境
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">
              テスター確保
            </h3>
            <p className="text-emerald-800 leading-7">
              リリース前に必要なテスト人数を効率的に確保。
              無駄な募集時間を削減できます。
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">
              相互支援
            </h3>
            <p className="text-emerald-800 leading-7">
              メンバー同士で協力し合う仕組みだから、
              継続的に安定したテスト環境を維持できます。
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">
              月額1,000円
            </h3>
            <p className="text-emerald-800 leading-7">
              シンプルな料金体系。
              すぐに参加して活動を開始できます。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          今すぐクローズドテストを加速させる
        </h2>
        <a
          href="https://page.theapps.jp/paid/join/H8hv3G40M25l59f1"
          className="apps-af bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          ACTCに参加する
        </a>
      </section>
    </div>
  );
}
