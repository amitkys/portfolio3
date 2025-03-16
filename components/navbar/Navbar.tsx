import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuItem } from "@/lib/types";
import { Navbar1Props } from "@/lib/types";

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/navbar/icon.svg",
    alt: "logo",
    title: "AmitKYs",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      //   items: [
      //     {
      //       title: "Blog",
      //       description: "The latest industry news, updates, and info",
      //       icon: <Book className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //     {
      //       title: "Company",
      //       description: "Our mission is to innovate and empower the world",
      //       icon: <Trees className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //     {
      //       title: "Careers",
      //       description: "Browse job listing and discover our workspace",
      //       icon: <Sunset className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //     {
      //       title: "Support",
      //       description:
      //         "Get in touch with our support team or visit our community forums",
      //       icon: <Zap className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //   ],
    },
    {
      title: "Resources",
      url: "#",
      //   items: [
      //     {
      //       title: "Help Center",
      //       description: "Get all the answers you need right here",
      //       icon: <Zap className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //     {
      //       title: "Contact Us",
      //       description: "We are here to help you with any questions you have",
      //       icon: <Sunset className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //     {
      //       title: "Status",
      //       description: "Check the current status of our services and APIs",
      //       icon: <Trees className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //     {
      //       title: "Terms of Service",
      //       description: "Our terms and conditions for using our services",
      //       icon: <Book className="size-5 shrink-0" />,
      //       url: "#",
      //     },
      //   ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between  lg:flex">
          <div className="ml-3">
            <a className="flex items-center gap-2" href={logo.url}>
              <span className="text-lg font-semibold font-mono">
                {logo.title}
              </span>
              <img alt={logo.alt} className="w-10" src={logo.src} />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm" variant="outline">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className="block lg:hidden ml-2">
          <div className="flex items-center justify-between">
            <a className="flex items-center gap-2" href={logo.url}>
              <span className="text-lg font-semibold font-mono">
                {logo.title}
              </span>
              <img alt={logo.alt} className="w-8" src={logo.src} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a className="flex items-center gap-2" href={logo.url}>
                      <span className="text-lg font-semibold font-mono">
                        {logo.title}
                      </span>
                      <img alt={logo.alt} className="w-8" src={logo.src} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    collapsible
                    className="flex w-full flex-col gap-4"
                    type="single"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink key={subItem.title} asChild className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} className="border-b-0" value={item.title}>
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} className="text-md font-semibold" href={item.url}>
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div>{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
