import heroData from '../hero/data.json';

export default function Hero({ title = heroData.title, subtitle = heroData.subtitle }) {
  return (
    <section style={{ padding: '20px', textAlign: 'center', background: '#f0f0f0' }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}
