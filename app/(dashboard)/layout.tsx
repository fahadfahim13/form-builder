import React, { ReactNode } from "react";
import Logo from "@/components/common/Logo";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <div
      className="flex flex-col min-h-screen min-w-full
    bg-background max-h-screen"
    >
      <nav className="flex justify-between items-center border-bottom border-b h-[60px] px-4 py-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
