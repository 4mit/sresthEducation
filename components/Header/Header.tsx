
import Anchors from '../Anchors/Anchors';

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
