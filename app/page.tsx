export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center bg-black text-white">
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
      </section>

      {/* About Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          ACTCとは？
        </h2>
        <p className="text-lg leading-8 text-center">
          Androidクローズドテストコミュニティ（ACTC）は、
          Google Playのクローズドテスト要件を満たすために、
          開発者同士が相互にテスト協力を行う場です。
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">テスター確保</h3>
            <p className="text-gray-700">
              リリース前に必要なテスト人数を効率的に確保できます。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">相互支援</h3>
            <p className="text-gray-700">
              メンバー同士で協力し合う仕組みだから継続的にテスト可能。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">月額1,000円</h3>
            <p className="text-gray-700">
              シンプルな料金体系で参加可能。すぐに活動を開始できます。
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
