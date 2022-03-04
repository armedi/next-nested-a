export default function Home() {
  return (
    <main>
      <a href="#">
        <div style={{ background: 'aqua', border: '1px solid red' }}>
          <div style={{ height: '200px' }}>
            <a href="#">
              This box has background color AQUA
            </a>
          </div>
        </div>
      </a>
      <div style={{ background: 'orange', border: '1px solid red' }}>
        <div style={{ height: '200px' }}>This box should have background color ORANGE</div>
      </div>
    </main>
  );
}
