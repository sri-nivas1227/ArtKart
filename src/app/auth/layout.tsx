import NavBar from "@/app/components/global/NavBar";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div lang="en" className="h-full">{children}</div>;
};

export default AuthLayout;
