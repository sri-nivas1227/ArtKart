import NavBar from "../components/global/NavBar";
const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default HomeLayout;
