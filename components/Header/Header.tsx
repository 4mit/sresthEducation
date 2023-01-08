import Link from 'next/link';
import Anchors from '../Anchors/Anchors';
import { Button } from '@nextui-org/react';
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth';
import { Dropdown, Avatar, Text } from '@nextui-org/react';

const links = [
  {
    title: 'Courses',
    href: '/category/articles',
  },
  {
    title: 'Teachers',
    href: '/category/news',
  },
  {
    title: 'Fee',
    href: '/category/articles',
  },
  {
    title: 'Testimonial',
    href: '/category/articles',
  },
  {
    title: 'FAQ',
    href: '/category/articles',
  },
  {
    title: 'About us',
    href: '/category/articles',
  },
];

const AdminMenu = () => {
  return (
    <Dropdown placement="bottom-left">
      <Dropdown.Trigger>
        <Avatar
          bordered
          size="sm"
          as="button"
          color="secondary"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </Dropdown.Trigger>
      <Dropdown.Menu  aria-label="Avatar Actions">
        <Dropdown.Item key="profile" css={{ height: '$18' }}>
          <Text b color="inherit" css={{ d: 'flex' }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: 'flex' }}>
            {AuthUser?.email}
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="settings" withDivider>
          My Settings
        </Dropdown.Item>
        <Dropdown.Item key="logout" withDivider color='none'>
          <Button onClick={AuthUser.signOut}>Logout</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
const Header = () => {
  return (
    <>
      <div className="shadow-md p-2 bg-white sticky top-0 z-10">
        <nav className="flex items-center list-none font-mono">
          <div>
            <img src="/scc.png" alt="" height={50} width={50}/>
          </div>
          <div className="flex grow">
            {links.map((link, i) => {
              return (
                <div className="flex items-center">
                  <Anchors
                    type="text-swapping"
                    text={link.title}
                    href={link.href}
                  />
                </div>
              );
            })}
          </div>         
        </nav>
      </div>
    </>
  );
};;

export default Header;
