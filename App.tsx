import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <header></header>

      <main className="px-6 max-w-[375px]">
        <ProfileCard></ProfileCard>
      </main>

      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/parthamallick313"
            target="_blank"
          >
            Partha Mallick
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
