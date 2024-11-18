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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useTranslations } from "next-intl";
import {
  Building2,
  Cog,
  DraftingCompassIcon,
  Fan,
  Leaf,
  LucideIcon,
  Snowflake,
  Truck,
} from "lucide-react";

const solutions = [
  {
    title: "Cooling",
    href: "/solutions/#cooling",
    description: "Cooling solutions",
    iconLabel: { icon: Snowflake },
  },
  {
    title: "Air conditioning",
    href: "/solutions/#air-conditioning",
    description: "Air conditioning solutions",
    iconLabel: { icon: Fan },
  },
  {
    title: "Savings",
    href: "/services-and-products/#savings",
    description: "Improving performance and saving energy",
    iconLabel: { icon: Leaf },
  },
];

// const aboutUs = [
//   {
//     title: "Our Story",
//     href: "/about-us/#our-story",
//     description: "Who are we and what we stand for?",
//     iconLabel: { icon: Building2 },
//   },
// ];

export function Navbar() {
  const t = useTranslations("navigation");

  const servicesAndProductLinks = [
    { title: "design", icon: DraftingCompassIcon },
    { title: "production", icon: Cog },
    { title: "savings", icon: Leaf },
    { title: "productDistribution", icon: Truck },
  ];

  const aboutUs = [
    {
      title: t(`aboutUs.ourStory.title`),
      href: t(`aboutUs.ourStory.href`),
      description: t(`aboutUs.ourStory.description`),
      iconLabel: { icon: Building2 },
    },
  ];

  const servicesAndProducts = servicesAndProductLinks.map((link) => ({
    title: t(`servicesAndProducts.${link.title}.title`),
    href: t(`servicesAndProducts.${link.title}.href`),
    description: t(`servicesAndProducts.${link.title}.description`),
    iconLabel: { icon: link.icon },
  }));

  return (
    <>
      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("servicesAndProductsTitle")}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-0">
              <div className="grid w-max grid-cols-2 gap-3 p-4">
                {servicesAndProducts.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                    iconLabel={link.iconLabel}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("solutionsTitle")}</NavigationMenuTrigger>
            <NavigationMenuContent className="left-0">
              <div className="grid w-max grid-cols-2 gap-3 p-4">
                {solutions.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                    iconLabel={link.iconLabel}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem
              title="Why Superheat"
              href="/contact"
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ListItem
              title="Contact"
              href="/contact"
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-max p-4">
                {aboutUs.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                    iconLabel={link.iconLabel}
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
  children?: React.ReactNode;
  href: string;
  iconLabel?: { icon: LucideIcon };
}

const ListItem = ({
  className,
  title,
  children,
  href,
  iconLabel,
  ...props
}: listItemProps) => {
  return (
    <>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "flex w-full select-none items-center gap-3 rounded-sm px-2 py-1 text-base transition-colors hover:bg-accent",
            className,
          )}
          {...props}
        >
          {iconLabel ? (
            <>
              <div>{<iconLabel.icon />}</div>
              <div className="w-full max-w-[160px]">
                {title && <div className="font-medium">{title}</div>}
                <p className="text-sm text-muted-foreground">{children}</p>
              </div>
            </>
          ) : (
            <>{title}</>
          )}
        </Link>
      </NavigationMenuLink>
    </>
  );
};
// ListItem.displayName = "ListItem"
