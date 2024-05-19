import nav from '@/app/constants/profileDrawerNavigation';

import NavigationItem from '@/app/components/profileDrawer/ui/NavigationItem';

const NavigationList = () => {
  return (
    <ul>
      {nav.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default NavigationList;
