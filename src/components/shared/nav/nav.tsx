'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const pages: Array<{ name: string; path: string }> = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products/1' },
];
export default function Nav(props: NavigationMenuProps) {
  const pathname = usePathname();
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {pages.map((p) => (
            <Link key={p.name} href={p.path} legacyBehavior passHref>
              <NavigationMenuLink
                data-active={
                  p.path.split('/')[1] === pathname.split('/')[1]
                    ? true
                    : undefined
                }
                className={navigationMenuTriggerStyle()}
              >
                {p.name}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
