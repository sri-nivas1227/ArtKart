const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div>Profile Layout</div>
      {children}
    </div>
  );
};

export default ProfileLayout;
