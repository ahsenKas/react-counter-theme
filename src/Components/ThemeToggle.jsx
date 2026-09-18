function ThemeToggle({ tema, setTema }) {
  return (
    <div>
      <button onClick={() => setTema(tema === "light" ? "dark" : "light")}>
        {tema === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
