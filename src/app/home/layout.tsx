import NavBar from "../components/global/NavBar";
const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-brand-beige flex flex-col h-full">
      <div className="w-3/4 mx-auto ">
        <NavBar />
        <div className="p-1 flex-1 h-full bg-brand-beige">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
