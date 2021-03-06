import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLinks';

interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType;
  children: String;
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}