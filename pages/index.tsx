import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>FastPost ماركێتى كوردى</title>
        <meta name="description" content="مارکێت كردی، چێشتخانە، عومرە، سەیارەکان، ماركیت، إلكترونيك" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
        <h1 style={{ fontSize: 40, color: '#1976d2', fontWeight: 'bold', marginBottom: 16 }}>FastPost</h1>
        <ul style={{ fontSize: 22, marginBottom: 16 }}>
          <li>چێشتخانە | عومرە | سەیارەکان | ماركیت | ئەلکترونیات</li>
          <li>پۆستکردن و گەڕانەوە بۆ هه‌موو قسم/کالا</li>
        </ul>
      </main>
    </>
  )
}