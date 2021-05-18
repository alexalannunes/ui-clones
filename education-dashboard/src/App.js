import { colors } from "./ui/colors";

function App() {
  return (
    <div className="dashboard">
      <div className="dashboard__menu">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto
        nisi tenetur libero? Asperiores, velit voluptatem. Facilis dignissimos
        nemo, cum repellendus necessitatibus blanditiis soluta similique qui
        repellat perspiciatis illo cupiditate!
        {colors.map((i) => (
          <div
            style={{ width: 30, height: 30, borderRadius: 10, background: i }}
          />
        ))}
      </div>
      <div className="dashboard__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        recusandae cumque fugiat cum. Blanditiis, cumque illo? Suscipit
        praesentium vero necessitatibus, quos corrupti quod tempore! Perferendis
        eligendi recusandae sit doloribus quam.
      </div>
    </div>
  );
}

export default App;
