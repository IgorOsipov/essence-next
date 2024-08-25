'use client';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const pages: Array<{ name: string; path: string }> = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products/1' },
];
export default function Nav(props) {
  const pathname = usePathname();
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {pages.map(p => (
            <Link href={p.path} legacyBehavior passHref>
              <NavigationMenuLink
                data-active={p.path.split('/')[1] === pathname.split('/')[1] ? true : undefined}
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
