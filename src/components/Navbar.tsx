"use client";

import * as React from "react";
import { Link } from "@/i18n/routing";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const servicesAndProducts = [
  {
    title: "Design",
    href: "/services-and-products/#designing",
    description: "Komplete licence designer",
    icon: "DraftingCompassIcon",
  },
  {
    title: "Production",
    href: "/services-and-products/#production",
    description: "Production using quality materials and equipment",
    icon: "Cog",
  },
  {
    title: "Savings",
    href: "/services-and-products/#savings",
    description: "Improving performance and saving energy",
    icon: "Leaf",
  },
  {
    title: "Product Distribution",
    href: "/services-and-products/#distribution",
    description: "Quality product distribution",
    icon: "Truck",
  },
];

const solutions = [
  {
    title: "Cooling",
    href: "/solutions/#cooling",
    description: "Cooling solutions",
    icon: "Snowflake",
  },
  {
    title: "Air conditioning",
    href: "/solutions/#air-conditioning",
    description: "Air conditioning solutions",
    icon: "Fan",
  },
  {
    title: "Savings",
    href: "/services-and-products/#savings",
    description: "Improving performance and saving energy",
    icon: "Leaf",
  },
];

const aboutUs = [
  {
    title: "Our Story",
    href: "/about-us/#our-story",
    description: "Who are we and what we stand for?",
    icon: "Building2",
  },
];

export function Navbar() {
  return (
    <>
      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services & Products</NavigationMenuTrigger>
            <NavigationMenuContent className="left-0">
              <div className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[400px]">
                {servicesAndProducts.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent className="left-0">
              <div className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[400px]">
                {solutions.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem
              href="/contact"
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Why Superheat
            </ListItem>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ListItem
              href="/contact"
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Contact
            </ListItem>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-full min-w-[200px] p-4">
                {aboutUs.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

interface listItemProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
  href: string;
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: listItemProps) => {
  return (
    <>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          {title && (
            <div className="text-sm font-medium leading-none">{title}</div>
          )}
          <p className="">{children}</p>
        </Link>
      </NavigationMenuLink>
    </>
  );
};
// ListItem.displayName = "ListItem"
