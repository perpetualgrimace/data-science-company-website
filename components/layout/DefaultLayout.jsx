import Meta from "./components/Meta";
import Navbar from "./components/Navbar";
import SpaceBG from "./components/SpaceBG";

export default function DefaultLayout(props) {
  const { title, slug, children } = props;

  return (
    <div className={`${slug}-layout default-layout`}>
      <Meta
        pageTitle={title}
        description="Modern data science platform for restrictive environments"
      />

      <Navbar />

      <main className="main" id="#main">
        <div className={`${slug}-wrapper wrapper u-pb-xl`}>
          {children}
        </div>
      </main>

      <SpaceBG />
    </div>
  );
}
