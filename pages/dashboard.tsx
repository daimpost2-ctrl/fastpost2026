import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>داشبورد FastPost</title>
      </Head>
      <main style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', background: '#fff'
      }}>
        <h2 style={{ color: '#1976d2', marginBottom: 12 }}>داشبوردكەى تایبەتی</h2>
        <p>بەخێربێن بۆ پانێل وە باشترین كاردەری سایت.</p>
      </main>
    </>
  )
}