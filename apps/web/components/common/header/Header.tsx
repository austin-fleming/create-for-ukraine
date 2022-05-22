import { ContentSection } from '../content-section';
import { NotificationRail } from '../notification-rail';

export const Header = () => (
  <div className='w-full sticky top-0 z-[1000] bg-white/75 backdrop-blur-sm'>
    {/* <NotificationRail /> */}

    <ContentSection el='header' className='flex flex-row justify-between items-baseline'>
      <a href='/' className='font-bold text-2xl'>
        refound
      </a>

      <nav className='flex flex-row gap-4'>
        {[
          { label: 'create', to: '/create' },
          /* { label: 'creators', to: '/' }, */
          { label: 'regions', to: '/' },
        ].map(({ label, to }) => (
          <a href={to} key={label} className='font-bold text-sm'>
            {label}
          </a>
        ))}
      </nav>
    </ContentSection>
  </div>
);
