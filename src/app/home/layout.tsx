import NavBar from "../components/global/NavBar";
const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <div className="p-1 flex-1 h-full">{children}</div>
    </div>
  );
};

export default HomeLayout;
